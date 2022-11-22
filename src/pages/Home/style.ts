import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 64,
        paddingHorizontal: 30
    },
    
    
    navbar:{
        flexDirection:"row",
        justifyContent:"space-around",
    },

    buttonNavbar:{
        
        width: 'auto',
        height: 20
    },

    textNavbar:{
        fontSize:16
    },

    containerLastStore:{
        marginTop: 20,
    },
    titleLastStore:{
        fontSize: 20
    }, 

    contentLastStore:{
        marginTop: 10,
        flexDirection: "row",
    }, 
    lastStore:{
        marginRight: 20,
        justifyContent:"center"
    },
    imageLastStore:{
        width:80,
        height: 80,
        borderRadius: 50

    },
    textLastStore:{

    },
    containerStores:{
        marginTop: 20
    },
    titleStores:{

    },

    contentStore:{
        marginTop: 20,
        flexDirection: 'row'
    },
    infoStore:{
        justifyContent:"center",
        marginLeft: 10
    },









})