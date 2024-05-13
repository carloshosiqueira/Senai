import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Trilogia2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('../assets/trilogia2.jpeg')}
          style={styles.image}
        />
        <Text style={styles.synopsis}>
        O filme ocorre 10 anos após os acontecimentos de Star Wars Episódio I: A Ameaça Fantasma. A galáxia está à beira de uma guerra civil. Liderados por um ex-Jedi chamado Conde Dookan, milhares de sistemas planetários ameaçam deixar a República Galáctica. Após a senadora Padmé Amidala escapar de uma tentativa de assassinato, Anakin Skywalker, um aprendiz Jedi, se torna seu protetor, enquanto seu mestre Obi-Wan Kenobi, investiga o atentado contra a vida dela. Logo Anakin, Padmé, e Obi-Wan testemunham o início de uma nova ameaça à galáxia, as Guerras Clônicas.
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


export default Trilogia2;