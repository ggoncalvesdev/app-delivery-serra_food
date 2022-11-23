import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import restaurantService, { listaRestaurantes } from "../../services/Api/Request/RestauranteService";

export const Restaurantes=()=>{

    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaRestaurantes, setListaRestaurantes] = useState<listaRestaurantes[]>([]);
    const [indexSelecionado, setIndexSelecionado] = useState<string>("");

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
    return (
        <View>
            <Text>Restaurantes</Text>
            <FlatList 
            data={listaRestaurantes}
            keyExtractor={item => item.index}
            renderItem={({item}) => {
                return(
                    <View>
                        <Text>Restaurantes</Text>
                        <Text>{item.nome}</Text>
                    </View>
                )
            }}
            />

        </View>
    )
}