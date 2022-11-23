import { api } from "../api";

export interface listaPrdutos {
    id: string,
    nome: string,
    valor: number
}

const getAll = (id) => {
    return api.get(`restaurantes/${id}/produtos`);
};

const get = (idRestaurante: number, idProduto: number) => {
    return api.get(`restaurantes/${idRestaurante}/produtos/${idProduto}`);
};

const create = (id: number, data) => {
    return api.post(`restaurantes/${id}/produtos`, data);
};

const update = (idRestaurante: number, idProduto: number, data) => {
    return api.put(`restaurantes/${idRestaurante}/produtos/${idProduto}`, data);
};

const remove = (idRestaurante: number, idProduto: number) => {
    return api.delete(`restaurantes/${idRestaurante}/produtos/${idProduto}`);
};
const produtosService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default produtosService;
