import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../../pages/Home";
import { Busca } from "../../pages/Busca";
import { Perfil } from "../../pages/Perfil";
import { Pedidos } from "../../pages/Pedidos";

import HomeIcon from "../../assets/icons/home.png";
import SearchIcon from "../../assets/icons/search.png";
import IconPerfil from "../../assets/icons/perfil.png";
import DeliveryIcon from "../../assets/icons/delivery.png";

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Home: undefined;
    Busca: undefined;
    Perfil: undefined;
    Pedidos: undefined;
};

function HomeTabStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#5047ff",
                tabBarInactiveTintColor: "#919191",
                tabBarInactiveBackgroundColor: "#fff",
                tabBarStyle: { backgroundColor: "#fff", paddingBottom: 2 },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                resizeMode="contain"
                                source={HomeIcon}
                                style={{ tintColor: color, width: 30 }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Busca"
                component={Busca}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                resizeMode="contain"
                                source={SearchIcon}
                                style={{ tintColor: color, width: 30 }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Pedidos"
                component={Pedidos}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                resizeMode="contain"
                                source={DeliveryIcon}
                                style={{ tintColor: color, width: 30 }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                resizeMode="contain"
                                source={IconPerfil}
                                style={{ tintColor: color, width: 30 }}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
export function Routes() {
    return (
        <NavigationContainer>
            <HomeTabStack />
        </NavigationContainer>
    );
}
