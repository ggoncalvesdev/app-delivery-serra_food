import { AxiosResponse } from "axios";
import { api } from "../api";

export interface listaClientes {
    cpf: string;
    dataNascimento: string;
    email: string;
    id: 0;
    nome: string;
    senha: string;
    usuario: string;
}

const getAll = (): Promise<AxiosResponse<listaClientes[], any>> => {
    return api.get(`cliente`);
};

const get = (idCliente: number) => {
    return api.get(`cliente/${idCliente}`);
};

const create = (data): Promise<AxiosResponse<listaClientes[], any>> => {
    return api.post(`cliente`, data);
};

const update = (idCliente: number, data) => {
    return api.put(`cliente/${idCliente}`, data);
};

const remove = (idCliente: number) => {
    return api.delete(`cliente/${idCliente}`);
};
const clienteService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default clienteService;
