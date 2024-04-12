//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenJuros from './componentes/Juros'
import Escolhas from './componentes/Escolhas';
import LoginForm from './componentes/loginForm';
import ScreenSwitch from './componentes/Switch';

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
        name="Escolhas"
        component={Escolhas}
        options={{title: 'Bem Vindo'}} />

        <Stack.Screen
        name="TelaJuros"
        component={ScreenJuros}
        options={{title: 'Calcule os juros'}} />

        <Stack.Screen
        name="TelaSwitch"
        component={ScreenSwitch}
        options={{title: 'Troque as imagens'}} />

      </Stack.Navigator>

    </NavigationContainer>
  );
  }