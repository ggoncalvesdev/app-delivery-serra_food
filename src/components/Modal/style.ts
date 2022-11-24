import { StyleSheet } from "react-native";
export const style = StyleSheet.create({

    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#12100055'
    },
    modalContainer: {
        backgroundColor: '#121000',
        borderRadius: 20,
        padding: "5%",
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        maxHeight: "80%",
    },

    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        width: "90%",
    },
    infoContainer:{
        flexDirection: "row",
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify'
    },
    textTitle: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight: 2
    },

    botao:{
        justifyContent:"center",
        backgroundColor: "#fff",
        alignSelf:"center",
        paddingHorizontal: 60,
        paddingVertical:20,
        marginBottom: 20,
        borderRadius:50,
    },

    textBotao:{
        fontWeight:"bold",
        fontSize:16
    },







})