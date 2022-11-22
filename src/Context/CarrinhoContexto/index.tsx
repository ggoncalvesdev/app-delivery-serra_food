import React, { createContext, useState } from "react";

interface ProvedorCarrinhoProps {
    children: React.ReactNode;
}

// interface CarrinhoContextoProps{
//   listaDePedidos:listaPedidos[];
//   salvaListaDePedidos:
// }
// export const CarrinhoContexto = createContext<CarrinhoContextoProps>({
//   listaDeEquipamentos:[{
//     index:"",
//     nome:"",
//     url:"",
//   }],
//   salvaListaDePedidos:(listaPedidos: listapedidos[])=>{},

// });

// export const ProvedorCarrinho = ({children: ProvedorCarrinhoProps})=>{
//   const [listaDePedidos, setListaDePedidos] = useState();/* <listaPedidos[]>([]); */

//   function salvaListaDePedidos (/* listaPedidos,listaPedidos[] */){
//     setListaDePedidos(/* listaPedidos */)
//   }

//   return (
//     <CarrinhoContexto.Provider
//       value={{
//         listaDePedidos,
//         setListaDePedidos}}
//     >
//       {children}
//     </CarrinhoContexto.Provider>
//     )
// }
