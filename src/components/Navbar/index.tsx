import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import procurar from "../../../assets/procurar.png";
import logo from "../../../assets/logo.png";
import mensagens from "../../../assets/mensagens.png";
import logoNav from "../../../assets/perfilNav.png";

import oferecer from "../../../assets/oferecer.png";
import { styles } from "./style";

export const Navbar = ({ navigation }) => {
    const buscar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Navbar" }],
        });
    };

    return (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => buscar()}>
                <View style={styles.navBarIcon}>
                    <Image
                        source={procurar}
                        style={[styles.imagemNav, styles.select]}
                    />
                    <Text style={[styles.textoNav, styles.select]}>Início</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image source={oferecer} style={styles.imagemNav} />
                    <Text style={styles.textoNav}>Busca</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image source={logo} style={styles.imagemNavLogo} />
                    <Text style={styles.textoNav}>Pedidos</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image source={mensagens} style={styles.imagemNav} />
                    <Text style={styles.textoNav}>Mensagens</Text>
                </View>
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image source={logoNav} style={styles.imagemNav} />
                    <Text style={styles.textoNav}>Perfil</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};
