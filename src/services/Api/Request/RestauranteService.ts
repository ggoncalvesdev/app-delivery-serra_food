import { api } from "../api";

export interface listaRestaurantes {
    index: string,
    nome: string
}

const getAll = () => {
    return api.get("restaurantes");
};

const get = (id) => {
    return api.get(`restaurantes/${id}`);
};

const create = (data) => {
    return api.post("restaurantes", data);
};

const update = (id, data) => {
    return api.put(`restaurantes/${id}`, data);
};

const remove = (id) => {
    return api.delete(`restaurantes/${id}`);
};
const restaurantService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default restaurantService;
