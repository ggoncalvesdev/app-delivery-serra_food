import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function HomeScren({ navigation }) {
    /* console.warn(navigation.navigate); */
    return (
        <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
            <Text>Início</Text>
            {[1, 2, 3, 4, 5].map((item) => {
                return (
                    <TouchableOpacity
                        key={item}
                        onPress={() => {
                            navigation.navigate("Perfil");
                        }}
                    >
                        <Text>Restaurante: 0{item}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
