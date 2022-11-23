import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Image,
} from "react-native";

import { style } from "./style";

import ProdutoService, {
    listaProdutos,
} from "../../services/Api/Request/ProdutoService";
import { ProdutoCard } from "../../components/ProdutoComponent";

export function Busca({ navigation }) {
    const [carregando, setCarregando] = useState<boolean>(true);
    const [listaProdutos, setlistaProdutos] = useState<listaProdutos[]>([]);
    const [indexSelecionado, setIndexSelecionado] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        ProdutoService.getAll()
            .then((res) => {
                console.log(res.data);
                setlistaProdutos(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setCarregando(false));
    }, []);

    return (
        <>
            <FlatList
                style={{ width: "100%" }}
                data={listaProdutos}
                numColumns={2}
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
