import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch, ImageBackground, ScrollView, Dimensions } from 'react-native';

export default function App() {
  const [habilitado, setHabilitado] = useState(false);
  
  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  // Definindo as imagens de fundo
  const solImage = require("./assets/sol.jpg");
  const luaImage = require("./assets/lua.jpg");

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={habilitado ? solImage : luaImage}
        style={styles.fundo}
      >
        <View style={styles.overlay}>
          <Switch
            value={habilitado}
            onValueChange={habilitar}
          />
          <Text
            style={styles.texto}
          >
            {habilitado ? "Bom dia" : "Boa noite"}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%", // Ocupa toda a largura da tela
    height: "100%", // Ocupa toda a altura da tela
  },
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%", // Ocupa toda a largura da tela
    height: "100%", // Ocupa toda a altura da tela
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adiciona um overlay transparente
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white', // Define a cor do texto como branco
  },
})
