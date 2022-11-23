import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import restaurantService, { listaRestaurantes } from "../../services/Api/Request/RestauranteService";
import { styles } from "./style";



export const CardCozinha = () => {

    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaRestaurantes, setListaRestaurantes] = useState<listaRestaurantes[]>([]);
    const [indexSelecionado, setIndexSelecionado] = useState<string>("")


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

        <View>
            <FlatList 
            data={listaRestaurantes}
            keyExtractor={item => item.index}
            renderItem={({item}) => {
                return(
                    <View>
                        <Text>{item.nome}</Text>
                        {/* <Text>{item.cozinha[0]}</Text> */}

                    </View>
                )
            }}
            />

        </View>
    )
}