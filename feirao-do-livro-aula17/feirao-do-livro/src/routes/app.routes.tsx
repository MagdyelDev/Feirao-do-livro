import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "../pages/Inicio";
import Acervo from "../pages/Acervo";
import DetalheLivro from "../pages/DetalheLivro";
import ComoParticipar from "../pages/ComoParticipar";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  // id={undefined}: exigência de tipagem do React Navigation 7.
  // Não muda nada no funcionamento do app.
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Acervo" component={Acervo} />
      <Stack.Screen name="DetalheLivro" component={DetalheLivro} />
      <Stack.Screen name="ComoParticipar" component={ComoParticipar} />
    </Stack.Navigator>
  );
}
