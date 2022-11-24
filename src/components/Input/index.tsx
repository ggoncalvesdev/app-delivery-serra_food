import React, { useState } from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import clienteService, {
    listaClientes,
} from "../../services/Api/Request/ClienteService";

import { style } from "./style";

export const Input = () => {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [usuario, setUsuario] = useState("");

    const [carregando, setCarregando] = useState<boolean>(true);

    const [listaPerfil, setlistaPerfil] = useState<listaClientes[]>([]);

    function cadastroCliente(data) {
        clienteService
            .create({
                cpf: cpf,
                email: email,
                nome: nome,
                senha: senha,
                usuario: usuario,
            })
            .then((res) => {
                setlistaPerfil(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setCarregando(false));
    }

    const cadastroNome = (nome) => {
        setNome(nome);
    };
    const cadastroSenha = (senha) => {
        setSenha(senha);
    };
    const cadastroEmail = (email) => {
        setEmail(email);
    };
    const cadastroCpf = (cpf) => {
        setCpf(cpf);
    };
    const cadastroUsuario = (usuario) => {
        setUsuario(usuario);
    };

    const clienteCadastrado = ({ nome, senha, email, cpf, usuario }) => {
        console.log(nome, senha, email, cpf, usuario);
        if (
            nome.includes(nome) ||
            senha.includes(senha) ||
            email.includes(email) ||
            cpf.includes(cpf) ||
            usuario.includes(usuario)
        ) {
            return true;
        }
        return false;
    };

    return (
        <>
            <View style={style.containerBusca}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={nome}
                    onChangeText={(queryText) => cadastroNome(queryText)}
                    placeholder="Nome"
                    placeholderTextColor={"#656363"}
                    style={{
                        backgroundColor: "#ffff",
                        paddingHorizontal: 10,
                        padding: 6,
                        borderRadius: 2,
                    }}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={senha}
                    onChangeText={(queryText) => cadastroSenha(queryText)}
                    placeholder="Senha"
                    placeholderTextColor={"#656363"}
                    style={{
                        backgroundColor: "#ffff",
                        paddingHorizontal: 10,
                        padding: 6,
                        borderRadius: 2,
                    }}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={email}
                    onChangeText={(queryText) => cadastroEmail(queryText)}
                    placeholder="Email"
                    placeholderTextColor={"#656363"}
                    style={{
                        backgroundColor: "#ffff",
                        paddingHorizontal: 10,
                        padding: 6,
                        borderRadius: 2,
                    }}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={cpf}
                    onChangeText={(queryText) => cadastroCpf(queryText)}
                    placeholder="cpf"
                    placeholderTextColor={"#656363"}
                    style={{
                        backgroundColor: "#ffff",
                        paddingHorizontal: 10,
                        padding: 6,
                        borderRadius: 2,
                    }}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={usuario}
                    onChangeText={(queryText) => cadastroUsuario(queryText)}
                    placeholder="Usuario"
                    placeholderTextColor={"#656363"}
                    style={{
                        backgroundColor: "#ffff",
                        paddingHorizontal: 10,
                        padding: 6,
                        borderRadius: 2,
                    }}
                />
            </View>
            <TouchableOpacity
                style={style.botaoCadastrar}
                onPress={() => cadastroCliente(clienteCadastrado)}
            >
                <Text style={style.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        </>
    );
};
