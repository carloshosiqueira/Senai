import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BemVindo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que deseja fazer?</Text>
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaSwitch')}>
          <Text style={styles.buttonText}>Trocar Imagens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaJuros')}>
          <Text style={styles.buttonText}>Calcular Juros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#006eff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});