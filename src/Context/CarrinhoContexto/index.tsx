import React, { createContext, useEffect, useState } from "react";
//import { listaPedidos } from '';

// interface ProvedorCarrinhoProps {
//     children: React.ReactNode;
// }

// interface CarrinhoContextoProps{
//   listaDePedidos:listaPedidos[];
//   salvaListaDePedidos: (pedidos: listaPedidos) => void;
//   precoTotal: number;
//   removePedidoDoCarrinho: (index:string) => void;
// }
// export const CarrinhoContexto = createContext<CarrinhoContextoProps>({
//     listaDePedidos:[{
//         index:"",
//         nome:"",
//         url:"",
//   }],
//   salvaListaDePedidos:(pedidos: listaPedidos) => { },
//   precoTotal:0,
//   removePedidoDoCarrinho: (index: string) => { },

// });

// export const ProvedorCarrinho = ({children}: ProvedorCarrinhoProps)=>{
//     const [listaDePedidos, setListaDePedidos] = useState()<listaPedidos[]>([]); 
//     const [precoTotal, setPrecoTotal] = useState<number>(0);

//     useEffect(() =>{
//         let soma = 0;
//         listaDePedidos.lenght >=1 && listaDePedidos.map((pedido: listaPedidos) => {
//             soma = soma + Number(pedido.preco)
//         });
//         setPrecoTotal(soma);
//     },[listaDePedidos])


//   function salvaListaDePedidos (pedido: listaPedidos[]){
//     setListaDePedidos([...listaDePedidos, pedido]);
//   };

//   function removePedidoDoCarrinho (index : string) {
//     let novaListaDePedidos = listaDePedidos.filter((pedido) => {
//         return pedido.index !== index
//     })
//     setListaDePedidos(novaListaDePedidos);
//   };

//   return (
//     <CarrinhoContexto.Provider
//       value={{
//         listaDePedidos,
//         salvaListaDePedidos,
//         precoTotal,
//         removePedidoDoCarrinho
//     }}
//     >
//       {children}
//     </CarrinhoContexto.Provider>
//     )
// }
