import React, { useContext } from "react";
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";

import { style } from "./style";

import { listaCategorias } from "../../services/Api/Request/CategoriaService";

interface CarrinhoCardProps extends TouchableOpacityProps {
    produto: listaCategorias;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<number>>;
}

export const CadegoriaCard = ({ produto, setModal }: CarrinhoCardProps) => {
    return (
        <TouchableOpacity>
            <View style={style.container}>
                <View style={style.card}>
                    <Text style={style.title}>{produto.nome}</Text>
                    {/* <AntDesign name="closecircleo" size={3} color="white" /> */}
                </View>
            </View>
        </TouchableOpacity>
    );
};
