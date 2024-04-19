import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import Home from './screens/home'
import Ddlc from './screens/ddlc'
import Neffex from './screens/neffex'
import Skillet from './screens/skillet'
import Sobre from './screens/sobre'
import Musica from './screens/pedirmusica'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        InitialRouteName="home"
        ActivateColor="#fca5c5"
        InativeColor="#607a90"
        BarStyle={{ backgroundColor: '#607a90' }}
        >

          <Tab.Screen
            name="Home"
            component={Home}
            option={{
              tabBarLabel: 'Home',
              tabBarIcon:({ color }) => {
                <Ionicons name="Home" color={color} size={26}/>
              },
            }}
            />

          <Tab.Screen
            name="Ddlc"
            component={Ddlc}
            option={{
              tabBarLabel: 'DDLC',
              tabBarIcon:({ color }) => {
                <Ionicons name="Ddlc" color={color} size={26}/>
              },
            }}
            />

          <Tab.Screen
            name="Neffex"
            component={Neffex}
            option={{
              tabBarLabel: 'NEFFEX',
              tabBarIcon:({ color }) => {
                <Ionicons name="Neffex" color={color} size={26}/>
              },
            }}
            />

          <Tab.Screen
            name="Skillet"
            component={Skillet}
            option={{
              tabBarLabel: 'SKILLET',
              tabBarIcon:({ color }) => {
                <Ionicons name="Skillet" color={color} size={26}/>
              },
            }}
            />

          <Tab.Screen
            name="Sobre"
            component={Sobre}
            option={{
              tabBarLabel: 'Sobre',
              tabBarIcon:({ color }) => {
                <Ionicons name="Sobre" color={color} size={26}/>
              },
            }}
            />

          <Tab.Screen
            name="Musica"
            component={Musica}
            option={{
              tabBarLabel: 'Pedir Musica',
              tabBarIcon:({ color }) => {
                <Ionicons name="Pedir Musica" color={color} size={26}/>
              },
            }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
