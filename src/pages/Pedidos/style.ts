import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "white",
    },
    contentTitle: {
        paddingTop: 60,
        paddingBottom: 10,
        backgroundColor: "grey",
        alignItems: "center",
    },

    containerTitle: {
        alignItems: "center",
        marginTop: 60,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    contentRestaurante: {
        padding: 20,
    },

    titleRestaurante: {
        fontSize: 20,
    },
    containerPreco: {
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#AABBCC",
        flexDirection: "row",
        borderRadius: 50,
        justifyContent: "center",
    },

    contentPedido: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 5,
    },
    text: {
        fontSize: 16,
        marginRight: 5,
    },
    contentPrecoFinal: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 20,
    },
});
