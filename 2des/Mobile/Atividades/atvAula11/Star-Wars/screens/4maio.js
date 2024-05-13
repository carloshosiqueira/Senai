import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const image = {uri: '../assets/star wars.jpg'};

const Chamada = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="center" style={styles.image}>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Chamada;