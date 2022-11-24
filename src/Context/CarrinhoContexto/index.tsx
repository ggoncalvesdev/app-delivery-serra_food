import React, { createContext, useEffect, useState } from "react";
import { listaProdutos } from "../../services/Api/Request/ProdutoService"

import AsyncStorage from '@react-native-async-storage/async-storage';

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


    useEffect(()=>{
      getData().then((res)=>{
          setListaDeProdutos(res ? res : [])
      })
  },[])

    useEffect(() =>{
        let soma = 0;
        listaDeProdutos.length >=1 && listaDeProdutos.map((produto: listaProdutos) => {
            soma = soma + Number(produto.valor)
        });
        setPrecoTotal(soma);
    },[listaDeProdutos])

    
    const storeData = async (value: listaProdutos[]) => {
      try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@itens_carrinho', jsonValue)
      } catch (e) {
          // saving error
      }
  }

  const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@itens_carrinho')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

  function salvaListaDeProdutos (produto: listaProdutos){
    setListaDeProdutos([...listaDeProdutos, produto]);
    storeData([...listaDeProdutos, produto])
    console.log(produto);
    console.log([...listaDeProdutos, produto]);

  };

  function removeProdutoDoCarrinho (index : number) {
    let novaListaDeProdutos = listaDeProdutos.filter((produto) => {
        return produto.id !== index
    })
    setListaDeProdutos(novaListaDeProdutos);
    storeData(novaListaDeProdutos);
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
