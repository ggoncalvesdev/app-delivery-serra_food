import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 64,
        paddingHorizontal: 30,
    },
    containerTitle:{
        alignItems:"center",
        marginBottom: 20
    },
    title:{
        fontSize: 22,
        fontWeight:"bold"
    },

    containerImagem:{
        alignItems:"center",
        marginBottom:20
    },
    imagemLogo:{
        width:150,
        height:150
    },

    navbar: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    buttonNavbar: {
        width: "auto",
        height: 20,
    },

    textNavbar: {
        fontSize: 16,
    },

    containerLastStore: {
        marginTop: 20,
        alignItems: "center",
    },
    titleLastStore: {
        fontSize: 30,
        color: "mediumblue",
        fontStyle: "italic",
        fontWeight: "800",
    },

    contentLastStore: {
        marginTop: 10,
        flexDirection: "row",
    },
    lastStore: {
        marginRight: 20,
        justifyContent: "center",
    },
    imageLastStore: {
        width: 300,
        height: 350,
        marginTop: 10,
        marginBottom: 10,
    },
    textLastStore: {
        fontSize: 20,
    },
    containerStores: {
        marginTop: 20,
    },
    titleStores: {},

    contentStore: {
        marginTop: 20,
        flexDirection: "row",
    },
    infoStore: {
        justifyContent: "center",
        marginLeft: 10,
    },

    estiloTextos: {
        fontSize: 20,
        textAlign: "center",
        color: "crimson",
        fontStyle: "italic",
        fontWeight: "700",
    },
});
