import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { styles } from "../Produtos/style";

import ProdutoService, {
    listaProdutos,
} from "../../services/Api/Request/ProdutoService";

import { ProdutoCard } from "../../components/ProdutoComponent/ProdutoComponent";
import { ModalProduto } from "../../components/Modal";

export const Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState<listaProdutos[]>([]);

    const [carregando, setCarregando] = useState<boolean>(false);
    const [indexSelecionado, setIndexSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        requisicaoListaProdutos();
    }, []);

    function requisicaoListaProdutos() {
        ProdutoService.getAll()
            .then((res) => {
                console.log(res.data);
                setListaProdutos(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setCarregando(false));
    }

    return (
        <>
            <FlatList
                style={{ width: "100%" }}
                data={listaProdutos}
                renderItem={({ item }) => {
                    return (
                        <ProdutoCard
                            produto={item}
                            setIndexSelecionado={setIndexSelecionado}
                            setModal={setModal}
                        />
                    );
                }}
            />
            {modal && (
                <ModalProduto
                    index={indexSelecionado}
                    modal={modal}
                    setModal={setModal}
                />
            )}
        </>
    );
};
