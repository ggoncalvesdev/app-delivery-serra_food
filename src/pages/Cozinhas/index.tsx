import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style";

import McDonalds from "../../assets/img/mcdonalds.png";
import Sushi from "../../assets/img/sushi.png";
import Sanduba from "../../assets/img/sanduba.jpg";
import Fastfood from "../../assets/img/fastfood.png";
import Pizza from "../../assets/img/pizza.png";
import Açai from "../../assets/img/açai.png";
import { setStatusBarHidden } from "expo-status-bar";
export const Cozinhas = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View
                    style={styles.navbar}
                >
                    

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Restaurantes");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Restaurantes</Text>
                    </TouchableOpacity>

                    

                    
                </View>

                <View style={styles.containerLastStore}>
                    <Text style={styles.titleLastStore}>
                        Variedades
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.contentLastStore}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Sushi}
                            ></Image>
                            <Text>Japonês</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Sanduba}
                            ></Image>
                            <Text>Sanduíches</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Fastfood}
                            ></Image>
                            <Text>Fast-food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Pizza}
                            ></Image>
                            <Text>Pizza</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Açai}
                            ></Image>
                            <Text>Açaí</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={styles.containerLastStore}>
                    <Text style={styles.titleLastStore}>Promoções</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.contentLastStore}
                    >
                        <TouchableOpacity style={styles.lastStore}>
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.lastStore}>
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.lastStore}>
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.lastStore}>
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.lastStore}>
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </ScrollView>
            </View>

                
    );
};
