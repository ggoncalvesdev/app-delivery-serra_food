import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import restaurantService, { listaRestaurantes } from "../../services/Api/Request/RestauranteService";
import { styles } from "./style";
import Sushi from "../../assets/img/sushi.png"



export const CardCozinha = () => {

    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaRestaurantes, setListaRestaurantes] = useState<listaRestaurantes[]>([]);
    const [indexSelecionado, setIndexSelecionado] = useState<string>("")

    interface listaProps{
        id: string,
        nome: string,
        cozinha: string
    }
    const lista: Array<listaProps> = [
        { id: "1", nome: "Kinpai", cozinha: "Japonesa"},
        { id: "2", nome: "Kinpai", cozinha: "Japonesa"},
        { id: "3", nome: "Kinpai", cozinha: "Japonesa"},
        { id: "4", nome: "Kinpai", cozinha: "Japonesa"},
        { id: "5", nome: "Kinpai", cozinha: "Japonesa"},
        { id: "6", nome: "Kinpai", cozinha: "Japonesa"},
        { id: "7", nome: "Kinpai", cozinha: "Japonesa"},
    
    ]

    useEffect(()=> {
        requisicaoListaRestaurantes();
    }, []); 

    function requisicaoListaRestaurantes(){
        setCarregando(true); 
        restaurantService.getAll().then((res) =>{
            setListaRestaurantes(res.data.cozinha)
        }).catch((err) =>{
            console.log(err)
        }).finally(()=>{
            setCarregando(false);
        });
    }
    return(

        <View
        style={styles.container}>
            <FlatList 
            data={lista}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return(
                    <View style={styles.content}>
                        <Image style={styles.imagem} source={Sushi}></Image>
                        <Text style={styles.title}>{item.nome}</Text>
                    </View>
                )
            }}
            />

        </View>
    )
}