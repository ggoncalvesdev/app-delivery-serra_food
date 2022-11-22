import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeTabStack } from "./src/services/Routes/HomeTabStack";
import { Busca } from "./src/pages/Search";
import { Navbar } from "./src/components/Navbar";
import { Pedidos } from "./src/pages/Pedidos";

export default function App() {
    const Tab = createBottomTabNavigator();

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
                    component={Pedidos}
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
