import React, { useEffect } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import ProdutoService from "../../services/Api/Request/ProdutoService";
import RestauranteService from "../../services/Api/Request/RestauranteService";
import { style } from "./style";

export function Busca() {
    useEffect(() => {
        ProdutoService.get(1, 1)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <View>
                <TextInput
                    style={style.Search}
                    placeholderTextColor="#45636B"
                    placeholder="Item ou loja"
                />
            </View>
            <ScrollView>
                <View style={style.ContainerTitle}>
                    <Text></Text>
                    <Text style={style.Title}>Categorias</Text>
                </View>
            </ScrollView>
        </>
    );
}
