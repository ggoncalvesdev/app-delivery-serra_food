import React, { useContext } from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";

import { style } from "./style";
import { CarrinhoContexto } from "../../Context/CarrinhoContexto";

import { AntDesign } from "@expo/vector-icons";
import { listaCategorias } from "../../services/Api/Request/CategoriaService";

interface CarrinhoCardProps extends TouchableOpacityProps {
    produto: listaCategorias;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<number>>;
}

export const CadegoriaCard = ({
    produto,
    setModal,
}: /*   setIndexSelecionado, */
CarrinhoCardProps) => {
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
