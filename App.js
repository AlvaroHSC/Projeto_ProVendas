import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TelaLogin from "./scr/Login/index";
import TelaCadastro from "./scr/Cadastro/index";
import TelaLista from "./scr/Lis_contatos/index";

const Stack = createNativeStackNavigator();

function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Cadastro" component={TelaCadastro}/>
  <Stack.Screen name="Login" component={TelaLogin} />
  <Stack.Screen name="Lista" component={TelaLista} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;