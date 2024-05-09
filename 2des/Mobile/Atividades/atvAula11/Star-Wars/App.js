import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import Trilogia1 from './screens/1trilogia';
import Trilogia2 from './screens/2trilogia';
import Trilogia3 from './screens/3trilogia';
import Vaider from './screens/darthvaider';
import Chamada from './screens/4maio';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const playSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/Main_Theme.mp3')
      );
      setSound(sound);
      await sound.playAsync();
    };

    playSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []); // Executa apenas na montagem do componente

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="darthvaider"
        activeColor="#a52a2a"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#CCCCCC' }}
      >
        <Tab.Screen
          name="Darth Vaider"
          component={Vaider}
          options={{
            tabBarLabel: 'Darth Vaider',
            tabBarIcon: ({ color }) => (
              <Ionicons name="" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="1° Trilogia"
          component={Trilogia1}
          options={{
            tabBarLabel: '1° Trilogia',
            tabBarIcon: ({ color }) => (
              <Ionicons name="" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="2° Trilogia"
          component={Trilogia2}
          options={{
            tabBarLabel: '2° Trilogia',
            tabBarIcon: ({ color }) => (
              <Ionicons name="" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="3° Trilogia"
          component={Trilogia3}
          options={{
            tabBarLabel: '3° Trilogia',
            tabBarIcon: ({ color }) => (
              <Ionicons name="" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="4maio"
          component={Chamada}
          options={{
            tabBarLabel: '4 maio',
            tabBarIcon: ({ color }) => (
              <Ionicons name="" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
