import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./style";

// import { CarrinhoContexto } from '../../Context/CarrinhoContexto';

export const Pedidos = () => {

    // const listaDePedidos = useContext(CarrinhoContexto).listaDePedidos
    // const precoTotal = useContext(CarrinhoContexto).precototal

    const [indexSelecionado, setIndexSelecionadoo] = useState<string>("");
    const [precoSelecionado, setPrecoSelecionado] = useState<number>(0);
    // const [modal, setModal] = useState<boolean>(false);

    return(

        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title} >Meu Pedido</Text>
            </View>
            <View style={styles.contentRestaurante}>
                <Text style={styles.titleRestaurante}>Nome do Restaurante</Text>
            </View>

            <View style={styles.contentPedido}>
                <Text style={styles.text}>Pedido:</Text>
                <Text style={styles.text}>nome da comida</Text>
            </View>
            <View style={styles.contentPedido}>
                <Text style={styles.text}>Preço:</Text>
                <Text style={styles.text}>preco da comida</Text>
            </View>


            <View style={styles.contentPrecoFinal}>
                <Text  style={styles.text}>
                    Preço:
                </Text>
                <Text  style={styles.text}>
                    Preço total
                </Text>
            </View>
            {/* <FlatList
                data={listaDePedidos}
                keyExtractor={item => item.index}
                renderItem={({ item }) => {
                    return(
                        <View>
                            <Text>
                                {item.name}
                            </Text>
                            <Text>
                                {item.preco}
                            </Text>
                        </View>
                    )
                }
                }
            />
            <View>
                <Text>
                    Preço:
                </Text>
                <Text>
                    R$ {precoTotal},00
                </Text>
            </View> */}

        </View>
    )

}