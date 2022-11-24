import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList } from "react-native";
import { style } from "./style";

import ProdutoService, {
    listaProdutos,
} from "../../services/Api/Request/ProdutoService";

import CategoriaService from "../../services/Api/Request/CategoriaService";
import { ProdutoCard } from "../../components/ProdutoComponent/ProdutoComponent";
import { ModalProduto } from "../../components/Modal";

import filter from "lodash.filter";

export function Busca() {
    const [query, setQuery] = useState("");
    const [modal, setModal] = useState<boolean>(false);
    const [fullData, setFullData] = useState([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [listaProdutos, setlistaProdutos] = useState<listaProdutos[]>([]);
    const [listaCategoria, setlistaCategoria] = useState([]);
    const [indexSelecionado, setIndexSelecionado] = useState<number>(0);

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
            <FlatList
                data={listaProdutos}
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
                    index={indexSelecionado}
                    modal={modal}
                    setModal={setModal}
                />
            )}
        </>
    );
}
