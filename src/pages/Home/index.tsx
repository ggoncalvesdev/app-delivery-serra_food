import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style";

import McDonalds from "../../assets/img/mcdonalds.png";
export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.navbar}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Perfil");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Início</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Perfil");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Restaurantes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Perfil");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Mercados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Perfil");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Bebidas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Perfil");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Farmácias</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Perfil");
                        }}
                        style={styles.buttonNavbar}
                    >
                        <Text style={styles.textNavbar}>Pets</Text>
                    </TouchableOpacity>
                </ScrollView>

                <View style={styles.containerLastStore}>
                    <Text style={styles.titleLastStore}>
                        Últimos restaurantes
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
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={McDonalds}
                            ></Image>
                            <Text>Mc Donald's</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={styles.containerLastStore}>
                    <Text style={styles.titleLastStore}>Favoritos</Text>
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

                <View style={styles.containerStores}>
                    <Text style={styles.titleLastStore}>Lojas</Text>

                    <TouchableOpacity style={styles.contentStore}>
                        <Image
                            style={styles.imageLastStore}
                            source={McDonalds}
                        ></Image>
                        <View style={styles.infoStore}>
                            <Text>Mc Donald's</Text>
                            <Text>Lanches</Text>
                            <Text>R$5,00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
