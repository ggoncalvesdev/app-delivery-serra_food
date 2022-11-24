import React, { useContext } from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";

import { CarrinhoContexto } from "../../Context/CarrinhoContexto";
import { listaProdutos } from "../../services/repository/produtoRepository";
import { style } from "./style";

interface ProdutosCardProps extends TouchableOpacityProps {
    produto: listaProdutos;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<number>>;
}

export const ProdutoCard = ({
    produto,
    setModal,
    setIndexSelecionado,
}: ProdutosCardProps) => {
    const removeProdutoDoCarrinho =
        useContext(CarrinhoContexto).removeProdutoDoCarrinho;

    function abreModal() {
        setModal(true);
        setIndexSelecionado(produto.id);
    }

    return (
        <TouchableOpacity onPress={abreModal}>
            <View>
                <View style={style.card}>
                    <View>
                        <Image
                            style={style.imgCard}
                            source={{ uri: produto.fotoLink }}
                        />
                        <Text style={style.title}>{produto.nome}</Text>
                    </View>

                    <View style={style.containerInfo}>
                        <Text style={style.title}>{produto.descricao}</Text>

                        <Text style={style.price}>R${produto.valor},00</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
