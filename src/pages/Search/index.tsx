import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";

import { style } from "./style";

import ProdutoService, {
    listaProdutos,
} from "../../services/Api/Request/ProdutoService";
import { ProdutoCard } from "../../components/ProdutoComponent";

import filter from "lodash.filter";

export function Busca({ navigation }) {
    const [fullData, setFullData] = useState([]);
    const [query, setQuery] = useState("");

    const [carregando, setCarregando] = useState<boolean>(true);
    const [listaProdutos, setlistaProdutos] = useState<listaProdutos[]>([]);
    const [indexSelecionado, setIndexSelecionado] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);

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
        /* const formattedQuery = text.toLocaleLowerCase(); */
        const filteredData = filter(fullData, (user) => {
            return contains(user /* , formattedQuery */);
        });
        setlistaProdutos(filteredData);
        setQuery(text);

        /* console.log(formattedQuery); */
    };

    const contains = ({ nome, descricao } /* , query */) => {
        if (nome.includes(query) || descricao.includes(query)) {
            return true;
        }

        return false;
    };

    return (
        <>
            <View
                style={{
                    backgroundColor: "#9d1a1a",
                    padding: 10,
                    marginVertical: 30,
                    borderRadius: 20,
                }}
            >
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    onChangeText={(queryText) => handleSearch(queryText)}
                    placeholder="Search"
                    style={{
                        backgroundColor: "#fff",
                        paddingHorizontal: 10,
                        marginTop: 40,
                    }}
                />
            </View>

            <FlatList
                data={listaProdutos}
                /* numColumns={2} */
                renderItem={({ item }) => {
                    return (
                        <>
                            <ProdutoCard
                                produto={item}
                                setIndexSelecionado={setIndexSelecionado}
                                setModal={setModal}
                            />

                            <View>
                                <Text style={style.title}>{item.nome}</Text>
                            </View>
                        </>
                    );
                }}
            />
        </>
    );
}
