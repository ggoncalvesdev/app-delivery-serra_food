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
                    <Text style={styles.texto}
                    >
                        INFORMÁTICA
                    </Text>
                    <Entypo name="tablet" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("#");
                    }} 
                    style={styles.botao}
                >
                    <Text style={styles.texto}
                    >
                        ESCRITÓRIO
                    </Text>
                    <Feather name="pen-tool" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("#");
                    }}
                    style={styles.botao}
                >
                    <Text style={styles.texto}
                    >
                        LIVRARIA
                    </Text>
                    <Entypo name="open-book" size={30} color="black" />
                </TouchableOpacity>
            </ScrollView>
        </View>            
    );
};
