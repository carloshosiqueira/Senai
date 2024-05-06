import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Vaider = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Darth Vaider fazendo joinha</Text>
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

export default Vaider;