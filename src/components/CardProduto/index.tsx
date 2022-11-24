import React, { useContext } from "react";
import { TouchableOpacityProps } from "react-native";
import { listaProdutos } from "../../services/api/Request/ProdutoService";
import { styles } from "./style";

interface CardProdutoProps extends TouchableOpacityProps {
    produto: listaProdutos;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<string>>;
    setPrecoSelecionado?: React.Dispatch<React.SetStateAction<number>>;
}
export const CardProduto = ({
    produto,
    setModal,
    setPrecoSelecionado,
    setIndexSelecionado,
}: CardProdutoProps) => {};
