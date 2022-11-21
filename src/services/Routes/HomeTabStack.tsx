import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScren } from "../../pages/Text/HomeScren";
import { Perfil } from "../../pages/Perfil";

export function HomeTabStack() {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Homeeee" component={HomeScren} />
            <HomeStack.Screen name="Perfil" component={Perfil} />
        </HomeStack.Navigator>
    );
}
