import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import { styles } from "../Produtos/style";

import { listaProdutos } from "../../services/Api/Request/ProdutoService";
import { CardProduto } from "../../components/CardProduto";
import { style } from "../Search/style";

export const Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState<listaProdutos[]>([]);
    const [carregando, setCarregando] = useState<boolean>(false);
    const [indexSelecionado, setIndexSelecionado] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);

    interface listaProps {
        id: string;
        nome: string;
        valor: number;
        categoria: string;
    }
    const lista: Array<listaProps> = [
        { id: "1", nome: "iPad", valor: 4000, categoria: "Eletrônicos" },
        { id: "1", nome: "iPad", valor: 4000, categoria: "Eletrônicos" },
        { id: "1", nome: "iPad", valor: 4000, categoria: "Eletrônicos" },
        { id: "1", nome: "iPad", valor: 4000, categoria: "Eletrônicos" },
        { id: "1", nome: "iPad", valor: 4000, categoria: "Eletrônicos" },
        { id: "1", nome: "iPad", valor: 4000, categoria: "Eletrônicos" },
    ];
    // useEffect(()=> {
    //     requisicaoListaProdutos();

    // },[]);

    // function requisicaoListaProdutos (){
    //     setcarregando(true);
    //          getProduto().then((res) =>) {
    //         setListaProdutos(res.data.results)
    //     }).catch((err) => {
    //         console.log(err)
    //     }).finally(() => {
    //         setCarregando(false);
    //     });
    // }

    return (
        <View style={styles.container}>
            <View style={styles.contentHeader}>
                <Text style={styles.titleHeader}>Nome</Text>
                <Text style={styles.titleHeader}>Categoria</Text>
                <Text style={styles.titleHeader}>Preço</Text>
            </View>
            {carregando ? (
                <ActivityIndicator size={"large"} />
            ) : (
                <FlatList
                    data={lista}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.content}>
                                <Text style={styles.title}>{item.nome}</Text>
                                <Text style={styles.title}>
                                    {item.categoria}
                                </Text>
                                <Text style={styles.title}>R${item.valor}</Text>
                            </TouchableOpacity>
                            // <CardProduto
                            //     produto={item}
                            //     setIndexSelecionado={setIndexSelecionado}
                            //     setModal={setModal}
                            // />
                        );
                    }}
                />
            )}
        </View>
    );
};
