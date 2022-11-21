import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";

function Perfil() {
    return (
        <View>
            <Text>Perfil</Text>
        </View>
    );
}

function HomeScren({ navigation }) {
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
export function HomeTabStack() {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Homeeee" component={HomeScren} />
            <HomeStack.Screen name="Perfil" component={Perfil} />
        </HomeStack.Navigator>
    );
}
