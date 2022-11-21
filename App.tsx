import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";

import { Navbar } from "./src/components/Navbar";

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
function Busca() {
    return (
        <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
            <Text>Busca</Text>
        </View>
    );
}
function Perfil() {
    return (
        <View>
            <Text>Perfil</Text>
        </View>
    );
}

function HomeTabStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScren} />
            <HomeStack.Screen name="Perfil" component={Perfil} />
        </HomeStack.Navigator>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Início"
                    component={HomeTabStack}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Busca"
                    component={Busca}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Pedidos"
                    component={Navbar}
                />
                {/*     <Tab.Screen
                    options={{ headerShown: false }}
                    name="Perfil"
                    component={Navbar}
                /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
