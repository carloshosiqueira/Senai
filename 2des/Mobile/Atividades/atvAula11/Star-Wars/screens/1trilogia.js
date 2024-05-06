import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Trilogia1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pesquisar sobre a primeira trilogia de star wars</Text>
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

export default Trilogia1;