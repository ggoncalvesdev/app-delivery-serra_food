import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style";

import Spider from "./../../assets/img/spiderman.png";
import Cadeira from "./../../assets/img/cadeira.png";
import Gabinete from "./../../assets/img/gabinete.png";
import Harry from "./../../assets/img/harrypotter.png";
import Mouse from "./../../assets/img/mouse.png";
import { style } from "../Busca/style";

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerLastStore}>
                    <Text style={styles.titleLastStore}>
                        Black Friday é aqui!
                    </Text>
                    <ScrollView
                        /*  horizontal */
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
                                source={Spider}
                            ></Image>
                            <Text style={styles.estiloTextos}>
                                Jogos PS5 a partir de R$ 99,90!
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Gabinete}
                            ></Image>
                            <Text style={styles.estiloTextos}>
                                Gabinetes a partir de R$ 145,00!
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Harry}
                            ></Image>
                            <Text style={styles.estiloTextos}>
                                Livros a partir de R$ 70,00!
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Mouse}
                            ></Image>
                            <Text style={styles.estiloTextos}>
                                Mouses a partir de R$ 219,90!
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                            style={styles.lastStore}
                        >
                            <Image
                                style={styles.imageLastStore}
                                source={Cadeira}
                            ></Image>
                            <Text style={styles.estiloTextos}>
                                Cadeiras a partir de R$ 59,90!
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};
