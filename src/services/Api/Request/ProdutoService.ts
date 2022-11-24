import { AxiosResponse } from "axios";
import { api } from "../api";

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

export interface listaProdutoProps {
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


const getAll = (): Promise<AxiosResponse<listaProdutos[], any>> => {
    return api.get(`produto/listaProdutos`);
};

const get = (id: number) => {
    return api.get(`produto/${id}`);
};

const create = (data) => {
    return api.post(`produtos`, data);
};

const update = (idProduto: number, data) => {
    return api.put(`produtos/${idProduto}`, data);
};

const remove = (idProduto: number) => {
    return api.delete(`produtos/${idProduto}`);
};
const produtosService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default produtosService;
