import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chamada = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chamada para o dia 4 de maio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});

export default Chamada;