import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import procurar from "../../../assets/procurar.png";
import logo from "../../../assets/logo.png";
import mensagens from "../../../assets/mensagens.png";
import logoNav from "../../../assets/perfilNav.png";

import oferecer from "../../../assets/oferecer.png";
import { styles } from "./style";

export const Navbar = () => {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image
                        source={procurar}
                        style={[styles.imagemNav, styles.select]}
                    />
                    <Text style={[styles.textoNav, styles.select]}>
                        Procurar
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image source={oferecer} style={styles.imagemNav} />
                    <Text style={styles.textoNav}>Oferecer</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image source={logo} style={styles.imagemNavLogo} />
                    <Text style={styles.textoNav}>Suas viagens</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image source={mensagens} style={styles.imagemNav} />
                    <Text style={styles.textoNav}>Mensagens</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navBarIcon}>
                    <Image source={logoNav} style={styles.imagemNav} />
                    <Text style={styles.textoNav}>Perfil</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
