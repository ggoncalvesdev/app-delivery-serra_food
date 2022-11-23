import { api } from "../api";

const getAll = () => {
    return api.get(`/produto`);
};

const get = (id) => {
    return api.get(`foto/${id}`);
};

const create = (data) => {
    return api.post("foto", data);
};

const update = (id, data) => {
    return api.put(`foto/${id}`, data);
};

const remove = (id) => {
    return api.delete(`foto/${id}`);
};
const fotoService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default fotoService;
