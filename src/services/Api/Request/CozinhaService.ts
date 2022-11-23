import { AxiosResponse } from "axios";
import { api } from "../api";

export interface listaDeCozinhas {
    id: number;
    nome: string;
}

interface getCozinhasProps {
    _embedded: {
        cozinhas: listaDeCozinhas[];
    };
}

const getAll = (): Promise<AxiosResponse<getCozinhasProps[], any>> => {
    return api.get("cozinhas");
};

const get = (id) => {
    return api.get(`cozinhas/${id}`);
};

const create = (data) => {
    return api.post("cozinhas", data);
};

const update = (id, data) => {
    return api.put(`cozinhas/${id}`, data);
};

const remove = (id) => {
    return api.delete(`cozinhas/${id}`);
};
const cozinhasService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default cozinhasService;
