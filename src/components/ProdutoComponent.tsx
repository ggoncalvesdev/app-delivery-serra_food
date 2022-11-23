import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";
import { listaProdutos } from "../services/repository/produtoRepository";
import { style } from "./style";

interface ProdutosCardProps extends TouchableOpacityProps {
    produto: listaProdutos;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<string>>;
}

export const ProdutoCard = ({
    produto,
    setModal,
    setIndexSelecionado,
}: ProdutosCardProps) => {
    function abreModal() {
        setModal(true);
        setIndexSelecionado(produto.id);
    }

    return (
        <TouchableOpacity onPress={abreModal}>
            <View style={style.container}>
                <View style={style.card}>
                    <Image
                        style={style.imgCard}
                        source={{ uri: produto.fotoLink }}
                    />
                    <Text style={style.title}>{produto.nome}</Text>
                    {/* <Text style={styles.title}>{item.descricao}</Text> */}
                    <Text style={style.price}> R${produto.valor},00</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
