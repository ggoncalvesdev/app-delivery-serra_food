import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121015",
        paddingHorizontal: 30,
    },
    title: {
        marginBottom: 1,
        marginVertical: 1,
        marginHorizontal: 15,
        paddingTop: 2,
        color: "#5047ff",
        fontSize: 18,
        fontWeight: "bold",
    },
    ContainerTitle: {
        position: "relative",
    },
    Title: {
        marginLeft: 15,
        fontSize: 18,
    },
    Search: {
        backgroundColor: "#E2E2E2",
        marginTop: 60,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 15,
        textAlign: "left",
    },

    fotoContainer: {
        alignItems: "center",
    },
    imagemIcon: {
        marginHorizontal: 50,
        width: 50,
        height: 50,
    },
    containeer: {
        marginTop: 30,
        padding: 2,
    },
    containerBusca: {
        marginTop: 70,
        marginHorizontal: 10,
        marginBottom: 5,
        padding: 3,
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0.22,

        elevation: 1,
    },
    buscador: {
        marginTop: 30,
    },
    contentLastStore: {
        marginTop: 10,
        flexDirection: "row",
    },
});
