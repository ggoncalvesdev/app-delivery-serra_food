import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeTabStack } from "./src/services/Routes/HomeTabStack";
import { Busca } from "./src/pages/Search";
import { Navbar } from "./src/components/Navbar";
import { Pedidos } from "./src/pages/Pedidos";
import { Image } from 'react-native';

import HomeIcon from './src/assets/icons/home.png'
import SearchIcon from './src/assets/icons/search.png'
import DeliveryIcon from './src/assets/icons/delivery.png'




export default function App() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
             screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#000080",
                tabBarInactiveTintColor: "#919191",
                tabBarInactiveBackgroundColor: "#fff",
                tabBarStyle: { backgroundColor: "#fff", paddingBottom: 2 }
             }}
                >
                <Tab.Screen
                    name="Início"
                    component={HomeTabStack}
                    options={{ 
                        tabBarIcon: ({ color }) => {
                            return (
                                <Image
                                    resizeMode='contain'
                                    source={HomeIcon}
                                    style={{ tintColor: color, width: 30 }}
                                />
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="Busca"
                    component={Busca}
                    options={{ 
                        tabBarIcon: ({ color }) => {
                            return (
                                <Image
                                    resizeMode='contain'
                                    source={SearchIcon}
                                    style={{ tintColor: color, width: 30 }}
                                />
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="Pedidos"
                    component={Pedidos}
                    options={{ 
                        tabBarIcon: ({ color }) => {
                            return (
                                <Image
                                    resizeMode='contain'
                                    source={DeliveryIcon}
                                    style={{ tintColor: color, width: 30 }}
                                />
                            )
                        }
                    }}
                />
                
            </Tab.Navigator>
        </NavigationContainer>
    );
}
