import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import Home from './screens/home'
import Buscar from './screens/buscar'
import Contato from './screens/contato'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        InitialRouteName="Home"
        ActivateColor="#a52a2a"
        InativeColor="3e2465"
        BarStyle={{ backgroundColor: '#C1FFC1' }}
      >

        <Tab.Screen
          name="Home"
          component={Home}
          optionn={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => {
              <Ionicons name="home" color={color} size={26} />
            },
          }}
        />

        <Tab.Screen
          name="Search"
          component={Buscar}
          optionn={{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color }) => {
              <Ionicons name="search" color={color} size={26} />
            },
          }}
        />

        <Tab.Screen
          name="About"
          component={Contato}
          optionn={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color }) => {
              <Ionicons name="information-circle" color={color} size={26} />
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
