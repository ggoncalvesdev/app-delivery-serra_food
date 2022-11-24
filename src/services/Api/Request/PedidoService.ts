import { AxiosResponse } from "axios";
import { api } from "../api";

export interface listaPedidos {
    idProduto: number;
    nomeProduto: string;
    qtdItens: number;
    subTotal: number;
    valor: number;
}

export interface getPedidoProps {
    id: number;
    idCliente: number;
    itens: listaPedidos[];
    nomeCliente: string;
    pedidoStatus: string;
    total: number;
}

const getAll = (): Promise<AxiosResponse<getPedidoProps, any>> => {
    return api.get("pedido");
};

const get = (id): Promise<AxiosResponse<getPedidoProps, any>> => {
    return api.get(`pedido/${id}`);
};

const create = (data) => {
    return api.post("pedido", data);
};

const update = (id, data) => {
    return api.put(`pedido/${id}`, data);
};

const remove = (id) => {
    return api.delete(`pedido/${id}`);
};
const pedidoService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default pedidoService;
