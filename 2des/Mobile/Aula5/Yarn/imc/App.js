// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenIMC from './componentes/FormIMC';
import LoginForm from './componentes/loginForm'
const stack = createNativeStackNavigator();

export default function App() {
  <NavigationContainer>
    
    <Stack.Navigator>
      <Stack.Screen
      name="Login"
      component={LoginForm}
      options={{title: 'Bem Vindo'}}/>

      <Stack.Screen
      name="telaIMC"
      component={ScreenIMC}
      options={{title: 'Calcula seu IMC'}}/>

    </Stack.Navigator>
  
  </NavigationContainer>
}