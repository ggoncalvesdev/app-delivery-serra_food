import React, { useContext, useEffect, useState } from 'react';
import { View, Modal, Text, ModalProps, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { CarrinhoContexto } from '../../Context/CarrinhoContexto';
import ProdutoService, {
    listaProdutos,
} from "../../services/Api/Request/ProdutoService";
import { style } from './style';



interface ModalProdutoProps extends ModalProps{
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    index: number;
}
export const ModalProduto = ({modal, setModal, index, ...rest}) =>{

    const [produtoStatus, setProdutoStatus] = useState<listaProdutos>();
    const [carregando, setCarregando] = useState<boolean>(true);

    

    useEffect(() => {
        ProdutoService.get(index).then((res)=> {
            setProdutoStatus(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => setCarregando(false));
}, []);

    const salvarListaDeProdutos = useContext(CarrinhoContexto).salvaListaDeProdutos
    const tiraProdutoDoCarrinho = useContext(CarrinhoContexto).removeProdutoDoCarrinho

    function botaProdutoNoCarrinho() {
        let produtoFinal: listaProdutos ={
            id: produtoStatus.id,
            nome: produtoStatus.nome,
            descricao: produtoStatus.descricao,
            qtdEstoque: produtoStatus.qtdEstoque,
            valor: produtoStatus.valor,
            idCategoria: produtoStatus.idCategoria,
            nomeCategoria: produtoStatus.nomeCategoria,
            idFuncionario: produtoStatus.idFuncionario,
            nomeFuncionario: produtoStatus.nomeFuncionario,
            dataFabricacao: produtoStatus.dataFabricacao,
            fotoLink: produtoStatus.fotoLink,

        }
        salvarListaDeProdutos(produtoFinal)
        setModal(false);
    }
    return(

        <Modal
            animationType='slide'
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(!modal)
            }}
            {...rest}
        >
            <View style={style.modal}>
                <View style={style.modalContainer}>
                    {carregando ?
                    <ActivityIndicator size={"large"}/>
                    :
                    <>
                    <View style={style.titleContainer}>
                        <Text style={style.title}>
                            {produtoStatus.nome}
                        </Text>
                        <TouchableOpacity onPress={() => setModal(false)}>
                            <AntDesign name="closecircleo" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={style.infoContainer}>
                        <Text style={style.textTitle}>
                            Preço:
                        </Text>
                        <Text style={style.text}>
                            R${produtoStatus.valor}
                        </Text>
                    </View>
                    <View style={style.infoContainer}>
                        <Text style={style.textTitle}>
                            Categoria:
                        </Text>
                        <Text style={style.text}>
                            {produtoStatus.nomeCategoria}
                        </Text>
                    </View>
                    <View style={style.infoContainer}>
                        <Text style={style.textTitle}>
                            Descrição:
                        </Text>
                        <Text style={style.text}>
                            {produtoStatus.descricao}
                        </Text>
                    </View>
                    <TouchableOpacity style={style.botao} onPress={()=>tiraProdutoDoCarrinho(index)}>
                        <Text style={style.textBotao}>Remover</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.botao} onPress={botaProdutoNoCarrinho}>
                        <Text style={style.textBotao}>Comprar</Text>
                    </TouchableOpacity>
                    </>
           
                }

                </View>

            </View>
        </Modal>

    )
}