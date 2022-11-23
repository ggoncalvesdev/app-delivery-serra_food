import { StyleSheet } from "react-native";
import { getJSDocReadonlyTag } from "typescript";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:10,
        paddingHorizontal: 20
    },
    contentHeader:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
        padding: 20,
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: "grey"

    },
    titleHeader:{
        fontWeight: "bold",
        fontSize: 20
    },

    content:{
        backgroundColor:"#AEC0D2",
        borderRadius:50,
        padding: 20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
        marginTop: 10

    },
    imagem:{
        width:80,
        height: 80,
        borderRadius: 50, 
        marginRight: 20

    },

    title:{
        fontSize: 20,
    },



    
})