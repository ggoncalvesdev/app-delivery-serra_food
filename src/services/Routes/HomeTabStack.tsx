import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Produtos } from "../../pages/Produtos";
import { Home } from "../../pages/Home";
import { Categorias } from "../../pages/Categorias";
import { Pedidos } from "../../pages/Pedidos";
import { CardCozinha } from "../../components/CardCozinha";

export function HomeTabStack() {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Homeeee" component={Home} />
            <HomeStack.Screen name="Produtos" component={Produtos} />
            <HomeStack.Screen name="Categorias" component={Categorias} />
            <HomeStack.Screen name="Pedidos" component={Pedidos} />
            <HomeStack.Screen name="CardCozinha" component={CardCozinha} />
        </HomeStack.Navigator>
    );
}
