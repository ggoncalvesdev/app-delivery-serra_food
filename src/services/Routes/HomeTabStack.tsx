import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScren } from "../../pages/Text/HomeScren";
import { Perfil } from "../../pages/Perfil";
import { Home } from "../../pages/Home";

export function HomeTabStack() {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Homeeee" component={Home} />
            <HomeStack.Screen name="Perfil" component={Perfil} />
        </HomeStack.Navigator>
    );
}
