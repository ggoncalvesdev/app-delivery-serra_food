import { api } from "../api/api";
import axios, { AxiosResponse } from "axios";

export interface listaProdutos {
    id: number;
    nome: string;
    descricao: string;
    qtdEstoque: number;
    valor: number;
    idCategoria: string;
    nomeCategoria: string;
    idFuncionario: string;
    nomeFuncionario: string;
    dataFabricacao: string;
    fotoLink: string;
}
