import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style";

import McDonalds from "../../assets/img/mcdonalds.png";
export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View
                    style={styles.navbar}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Início</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Produtos");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Produtos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Categorias");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Categorias</Text>
                    </TouchableOpacity>

                    
                </View>

                
            </ScrollView>
        </View>
    );
};
