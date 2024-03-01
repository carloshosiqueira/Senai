//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenIMC from './componentes/FormIMC';
import LoginForm from './componentes/loginForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginForm}
        options={{title: 'Bem vindo'}} />

        <Stack.Screen
        name="telaIMC"
        component={ScreenIMC}
        options={{title: 'Calcule seu IMC'}} />

      </Stack.Navigator>

    </NavigationContainer>
  );
  }