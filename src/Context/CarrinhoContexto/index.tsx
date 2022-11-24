import React, { createContext, useEffect, useState } from "react";
import { listaProdutos } from "../../services/Api/Request/ProdutoService"
interface ProvedorCarrinhoProps {
    children: React.ReactNode;
}

interface CarrinhoContextoProps{
  listaDeProdutos:listaProdutos[];
  salvaListaDeProdutos: (produtos: listaProdutos) => void;
  precoTotal: number;
  removeProdutoDoCarrinho: (index:number) => void;
}
export const CarrinhoContexto = createContext<CarrinhoContextoProps>({
    listaDeProdutos:[{
        id: 0,
        nome: "",
        descricao: "",
        qtdEstoque: 0,
        valor: 0,
        idCategoria: "",
        nomeCategoria: "",
        idFuncionario: "",
        nomeFuncionario: "",
        dataFabricacao: "",
        fotoLink: "",
    }],
  salvaListaDeProdutos:(produtos: listaProdutos) => { },
  precoTotal:0,
  removeProdutoDoCarrinho: (index: number) => { },

});

export const ProvedorCarrinho = ({children}: ProvedorCarrinhoProps)=>{
    const [listaDeProdutos, setListaDeProdutos] = useState<listaProdutos[]>([]);
    const [precoTotal, setPrecoTotal] = useState<number>(0);

    useEffect(() =>{
        let soma = 0;
        listaDeProdutos.length >=1 && listaDeProdutos.map((produto: listaProdutos) => {
            soma = soma + Number(produto.valor)
        });
        setPrecoTotal(soma);
    },[listaDeProdutos])

  function salvaListaDeProdutos (produto: listaProdutos){
    setListaDeProdutos([...listaDeProdutos, produto]);
    console.log(produto);
    console.log([...listaDeProdutos, produto]);

  };

  function removeProdutoDoCarrinho (index : number) {
    let novaListaDeProdutos = listaDeProdutos.filter((produto) => {
        return produto.id !== index
    })
    setListaDeProdutos(novaListaDeProdutos);
  };

  return (
    <CarrinhoContexto.Provider
      value={{
        listaDeProdutos,
        salvaListaDeProdutos,
        precoTotal,
        removeProdutoDoCarrinho
    }}
    >
      {children}
    </CarrinhoContexto.Provider>
    )
}
