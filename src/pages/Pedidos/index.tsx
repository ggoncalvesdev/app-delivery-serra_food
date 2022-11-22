import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./style";

// import { CarrinhoContexto } from '../../Context/CarrinhoContexto';

export const Pedidos = () => {

    // const listaDePedidos = useContext(CarrinhoContexto).listaDePedidos
    // const precoTotal = useContext(CarrinhoContexto).precototal

    const [indexSelecionado, setIndexSelecionadoo] = useState<string>("");
    const [precoSelecionado, setPrecoSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);

    return(

        <View style={styles.container}>
            <View>
                <Text >Meu Pedido</Text>
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