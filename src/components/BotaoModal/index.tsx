import React from "react"
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native"
import { styles } from "./style"

interface BotaoProps extends TouchableOpacityProps {
    title: string,

}

export const Botao = ({ title, ...resto }: BotaoProps) => {


    return (
        <TouchableOpacity
            style={styles.button}
            {...resto}
        >
            <Text
                style={styles.buttonText}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}