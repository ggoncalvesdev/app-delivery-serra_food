/* import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style";

import Spider from "./../../assets/img/spiderman.png";
import Cadeira from "./../../assets/img/cadeira.png";
import Gabinete from "./../../assets/img/gabinete.png";
import Harry from "./../../assets/img/harrypotter.png";
import Mouse from "./../../assets/img/mouse.png";

import { setStatusBarHidden } from "expo-status-bar";
export const Categorias = ({ navigation }) => {
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
                                navigation.navigate("CardCozinha");
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
 */