import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-evenly",
        position: "absolute",
        width: "100%",
        zIndex: 20,
        bottom: 0,
        paddingTop: 8,
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 8,
    },
    imagemNav: {
        tintColor: "#708C91",
        width: 30,
        height: 30,
    },
    imagemNavLogo: {
        tintColor: "#708C91",
        width: 30,
        height: 30,
    },
    textoNav: {
        color: "#708C91",
        fontSize: 10,
    },
    navBarIcon: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 6,
    },
    select: {
        tintColor: "#52CCFC",
        color: "#52CCFC",
    },
});
