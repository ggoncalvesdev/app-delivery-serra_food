import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Input } from "../../components/Input";
import clienteService from "../../services/Api/Request/ClienteService";
import { styles } from "./style";

export function Perfil() {
    return (
        <View>
            <Text style={styles.title}>Perfil</Text>
            <Input />
        </View>
    );
}
