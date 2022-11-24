import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    ScrollView,
    TouchableOpacityProps,
} from "react-native";

import { style } from "./style";

import ProdutoService, {
    listaProdutos,
} from "../../services/Api/Request/ProdutoService";
import CategoriaService from "../../services/Api/Request/CategoriaService";

import { ProdutoCard } from "../../components/ProdutoComponent/ProdutoComponent";

import filter from "lodash.filter";
import { ModalProduto } from "../../components/Modal";

export function Busca({ navigation }) {
    const [fullData, setFullData] = useState([]);

    const [query, setQuery] = useState("");

    const [modal, setModal] = useState<boolean>(false);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [indexSelecionado, setIndexSelecionado] = useState<number>(0);

    const [listaProdutos, setlistaProdutos] = useState<listaProdutos[]>([]);
    const [listaCategoria, setlistaCategoria] = useState([]);

    useEffect(() => {
        CategoriaService.getAll()
            .then((res) => {
                setlistaCategoria(res.data);
                console.log(res.data);
                setFullData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setCarregando(false));
    }, []);

    useEffect(() => {
        ProdutoService.getAll()
            .then((res) => {
                setlistaProdutos(res.data);
                setFullData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setCarregando(false));
    }, []);

    const handleSearch = (text) => {
        const formattedQuery = text;
        const filteredData = filter(fullData, (user) => {
            return contains(user, formattedQuery);
        });
        setlistaProdutos(filteredData);
        setQuery(text);

        console.log(formattedQuery);
    };

    const contains = ({ nome, descricao }, query) => {
        if (nome.includes(query) || descricao.includes(query)) {
            return true;
        }

        return false;
    };

    return (
        <>
            <View style={style.containerBusca}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    onChangeText={(queryText) => handleSearch(queryText)}
                    placeholder="Buscar Produtos"
                    placeholderTextColor={"#C7C7C7"}
                    style={{
                        backgroundColor: "#ffff",
                        paddingHorizontal: 10,
                        padding: 6,
                        borderRadius: 2,
                    }}
                />
            </View>
            {/* <View>
                <TouchableOpacity>
                <View>
                <FlatList
                    data={listaCategoria}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <CadegoriaCard
                                    produto={item}
                                    setModal={setModal}
                                    setIndexSelecionado={setIndexSelecionado}
                                />

                                <View>
                                    <Text style={style.title}>
                                        {item.nomeCategoria}
                                    </Text>
                                </View>
                            </>
                        );
                    }}
                />
                </View>
                </TouchableOpacity>
            </View> */}
            {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={style.contentLastStore}
            >
                <FlatList
                    data={listaCategoria}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <CadegoriaCard
                                    produto={item}
                                    setModal={setModal}
                                    setIndexSelecionado={setIndexSelecionado}
                                />

                                <View>
                                    <Text style={style.title}>
                                        {item.nomeCategoria}
                                    </Text>
                                </View>
                            </>
                        );
                    }}
                />
            </ScrollView> */}
            <FlatList
                data={listaProdutos}
                /* numColumns={2} */
                renderItem={({ item }) => {
                    return (
                        <ProdutoCard
                            produto={item}
                            setModal={setModal}
                            setIndexSelecionado={setIndexSelecionado}
                        />
                    );
                }}
            />
            {modal && (
                <ModalProduto
                    /*                     navigation.navigate={} */
                    index={indexSelecionado}
                    modal={modal}
                    setModal={setModal}
                />
            )}
        </>
    );
}
