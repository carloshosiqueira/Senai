import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Trilogia3 = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('../assets/trilogia3.jpeg')}
          style={styles.image}
        />
        <Text style={styles.synopsis}>
        O filme começa três anos após o início das Guerras Clônicas. Os Cavaleiros Jedi estão espalhados por toda a galáxia, liderando uma guerra maciça contra os Separatistas. O Conselho Jedi incumbe o Mestre Jedi Obi-Wan Kenobi de eliminar o notório General Grievous, líder do Exército Separatista. Enquanto isto, o Cavaleiro Jedi Anakin Skywalker se aproxima de Palpatine, o Supremo Chanceler da República Galáctica e, secretamente, um Lorde Sith. Sua amizade aprofundada ameaça a Ordem Jedi, a República, e o próprio Anakin.
          </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'black', // fundo preto
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: 'cover',
  },
  synopsis: {
    color: 'white', // texto branco
    fontSize: 14,
    paddingHorizontal: 20,
    marginTop: 20,
    width: "90vw"
  },
});


export default Trilogia3;