import { AxiosResponse } from "axios";
import { api } from "../api";

export interface listaCategorias {
    id: number;
    nome: string;
    descricao: string;
}

const getAll = (): Promise<AxiosResponse<listaCategorias[], any>> => {
    return api.get(`categoria`);
};

const get = (idCategoria: number) => {
    return api.get(`categoria/${idCategoria}`);
};

const create = (data) => {
    return api.post(`categoria`, data);
};

const update = (idCategoria: number, data) => {
    return api.put(`categoria/${idCategoria}`, data);
};

const remove = (idCategoria: number) => {
    return api.delete(`categoria/${idCategoria}`);
};
const categoriasService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default categoriasService;
