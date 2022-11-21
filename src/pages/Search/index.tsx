import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { style } from "./style";

export function Busca() {
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
                    <Text style={style.Title}>Categorias</Text>
                </View>
            </ScrollView>
        </>
    );
}
