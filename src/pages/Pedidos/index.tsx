import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./style";

import { listaProdutos } from "../../services/Api/Request/ProdutoService";
import { ModalProduto } from "../../components/Modal";
import { CarrinhoContexto } from "../../Context/CarrinhoContexto";
import { ProdutoCard } from "../../components/ProdutoComponent";


export const Pedidos = () => {

    const listaDeProdutos = useContext(CarrinhoContexto).listaDeProdutos
    const precoTotal = useContext(CarrinhoContexto).precoTotal

    const [indexSelecionado, setIndexSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
    useEffect(() =>{
        console.log(listaDeProdutos)
    });
    return(

        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title} >Carrinho</Text>
            </View>

            <FlatList
                data={listaDeProdutos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <ProdutoCard
                            produto={item}
                            setIndexSelecionado={setIndexSelecionado}
                            setModal={setModal}
                        />
                    )
                }
                }
            />
            <View>
                <Text style={styles.title}>
                    Preço:
                </Text>
                <Text style={styles.title}>
                    R$ {precoTotal},00
                </Text>
            </View> 
            {modal &&
                <ModalProduto
                    index={indexSelecionado}
                    modal={modal}
                    setModal={setModal}
                />
            }

        </View>
    )

}