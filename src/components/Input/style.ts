import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    input: {
        marginBottom: 10,
        borderRadius: 10,
    },

    containerBusca: {
        marginHorizontal: 15,

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
    botaoCadastrar: {
        marginHorizontal: 100,
        marginVertical: 50,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: "#5047ff",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#C7C7C7",
    },
    textoBotao: {
        textAlign: "center",
    },
});
