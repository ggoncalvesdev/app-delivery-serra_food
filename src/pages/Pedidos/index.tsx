import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./style";

import { ModalProduto } from "../../components/Modal";
import { CarrinhoContexto } from "../../Context/CarrinhoContexto";
import { ProdutoCard } from "../../components/ProdutoComponent/ProdutoComponent";

export const Pedidos = () => {
    const listaDeProdutos = useContext(CarrinhoContexto).listaDeProdutos;
    const precoTotal = useContext(CarrinhoContexto).precoTotal;

    const [indexSelecionado, setIndexSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Meu Carrinho</Text>
            </View>
            <FlatList
                data={listaDeProdutos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ProdutoCard
                            produto={item}
                            setIndexSelecionado={setIndexSelecionado}
                            setModal={setModal}
                        />
                    );
                }}
            />
            <View style={styles.containerPreco}>
                <Text style={styles.title}>Preço Total: </Text>
                <Text style={styles.title}>R$ {precoTotal},00</Text>
            </View>
            {modal && (
                <ModalProduto
                    index={indexSelecionado}
                    modal={modal}
                    setModal={setModal}
                />
            )}
        </View>
    );
};
