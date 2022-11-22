import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'white',

    },
    contentTitle:{
        paddingTop:60,
        paddingBottom:10,
        backgroundColor:"grey",
        alignItems:"center",
    },
    title:{
        fontSize:24
    },

    contentRestaurante:{
        padding:20
    },

    titleRestaurante:{
        fontSize:20
    },

    contentPedido:{
        flexDirection:"row",
        marginLeft:20,
        marginTop:5
    },
    text:{
        fontSize:16,
        marginRight:5
    },
    contentPrecoFinal:{
        flexDirection:"row",
        marginLeft:20,
        marginTop:20
    },


})