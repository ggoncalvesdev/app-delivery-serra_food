import React, { useContext } from "react";
import { Text, TouchableOpacityProps, TouchableOpacity, Image } from "react-native";
import { listaProdutos } from "../../services/api/Request/ProdutoService";
import { styles } from "./styles";


interface CardProdutoProps extends TouchableOpacityProps{
    produto: listaProdutos;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<string>>;
    setPrecoSelecionado?: React.Dispatch<React.SetStateAction<number>>;

}
export const CardProduto = ({produto, setModal, setPrecoSelecionado, setIndexSelecionado } : CardProdutoProps) =>{

    // const removeProdutoDoCarrinho = useContext(CarrinhoContexto).removeEquipamentoDoCarrinho

    function abreModal () {
        setIndexSelecionado(produto.index);
        setPrecoSelecionado && setPrecoSelecionado(produto.preco)
        setModal (true);
    }

    return(
        <TouchableOpacity onPress={abreModal} style={styles.button}>
            <Text>
                {produto.nome}
            </Text>
            <Text>
                {produto.preco}
            </Text>
            <TouchableOpacity onPress={() => removeProdutoDoCarrinho (produto.index)}>
                <Text>REMOVER</Text>
            </TouchableOpacity>

        </TouchableOpacity>
    )


}