import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import { styles } from "../Produtos/style";

import { listaPrdutos } from "../../services/Api/Request/ProdutoService";
import { CardProduto } from "../../components/CardProduto";

export const Produtos=()=>{

    const [listaProdutos, setListaProdutos ] = useState<listaPrdutos[]>([]);
    const [carregando, setCarregando] = useState<boolean>(false);
    const [indexSelecionado, setIndexSelecionado] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);

    // useEffect(()=> {
    //     requisicaoListaProdutos();

    // },[]);

    // function requisicaoListaProdutos (){
    //     setcarregando(true);
    //          getProduto().then((res) =>) {
    //         setListaProdutos(res.data.results)
    //     }).catch((err) => {
    //         console.log(err)
    //     }).finally(() => {
    //         setCarregando(false);
    //     });
    // }

    return (
        <View style={styles.container}>
            {carregando ?
                <ActivityIndicator size={"large"}
                />
                :
                <FlatList
                    data={listaProdutos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>{
                        return(
                            <CardProduto
                                produto={item}
                                setIndexSelecionado={setIndexSelecionado}
                                setModal={setModal}
                            />
                        )
                    }
                }
                />


            }

        </View>
    )
}