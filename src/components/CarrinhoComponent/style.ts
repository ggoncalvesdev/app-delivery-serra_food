import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    textButton: {
        color: "",
        fontWeight: "bold",
        fontSize: 18,
    },
    title: {
        color: "red",
        marginTop: 6,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
    },
    categoria: {
        color: "red",
        fontSize: 10,
    },
    container: {
        /*  backgroundColor: "red", */
    },
    card: {
        /* flexDirection: "row", */
        backgroundColor: "#ffff",
        paddingVertical: 4,
        paddingHorizontal: 10,
        paddingBottom: 10,
        marginTop: 10,
        /*  marginBottom: -50, */
        marginHorizontal: 12,
        borderRadius: 10,
        alignItems: "center",
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
});
