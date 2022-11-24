import React from "react";

import { Routes } from "./src/services/Routes/HomeTabStack";

import { ProvedorCarrinho } from "./src/Context/CarrinhoContexto";

export default function App() {
    return (
        <ProvedorCarrinho>
            <Routes />
        </ProvedorCarrinho>
    );
}
