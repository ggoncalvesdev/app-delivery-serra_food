import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScren } from "../../pages/Text/HomeScren";
import { Restaurantes } from "../../pages/Restaurantes";
import { Home } from "../../pages/Home";
import { Cozinhas } from "../../pages/Cozinhas";

export function HomeTabStack() {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Homeeee" component={Home} />
            <HomeStack.Screen name="Restaurantes" component={Restaurantes} />
            <HomeStack.Screen name="Cozinhas" component={Cozinhas} />
        </HomeStack.Navigator>
    );
}
