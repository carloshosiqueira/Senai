import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const Trilogia1 = () => {
  return (
    <ImageBackground source={require('../assets/teste.avif')} style={styles.container}>
      <View style={styles.overlay}>
        <Image
          source={require('../assets/DarthJoia.png')}
          style={styles.image}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // cor de fundo com transparência
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Trilogia1;
