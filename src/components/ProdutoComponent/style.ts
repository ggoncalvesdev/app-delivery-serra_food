import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    textButton: {
        color: "",
        fontWeight: "bold",
        fontSize: 18,
    },
    containerInfo:{
        justifyContent:"center",
        alignItems:"center",
        marginRight:20
    },

    card: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
        paddingTop: 4,
        paddingLeft: 10,
        justifyContent: "space-between",
        paddingRight: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#C7C7C7",
        shadowColor: "#aaaa",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0.22,

        elevation: 1,
    },
    imgCard: {
        width: 150,
        height: 150,
    },
    title: {
        color: "#5047ff",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },

    price: {
        color: "#5047ff",
        fontSize: 19,
        textAlign: "right",
    },

    descricao: {
        marginTop: 40,
        color: "#5047ff",
        fontSize: 18,
        paddingRight: 100,
        marginRight: 30,
        marginBottom: 10,
    },
});
