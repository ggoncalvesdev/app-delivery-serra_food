import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export const Categorias = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("#");
                    }}
                    style={styles.botao}
                >
                    <Entypo name="tablet" size={55} color="black" />
                    <Text style={styles.texto}
                    >
                        Informatica
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("#");
                    }} 
                    style={styles.botao}
                >
                    <Feather name="pen-tool" size={55} color="black" />
                    <Text style={styles.texto}
                    >
                        Escritório
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("#");
                    }}
                    style={styles.botao}
                >
                    <Entypo name="open-book" size={55} color="black" />
                    <Text style={styles.texto}
                    >
                        Livraria
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>            
    );
};