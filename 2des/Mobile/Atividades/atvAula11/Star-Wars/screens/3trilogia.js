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
          Em Star Wars: Episódio I, quando a maquiavélica Federação Comercial planeja invadir o pacífico planeta Naboo, o guerreiro Jedi Qui-Gon Jinn (Liam Neeson) e seu aprendiz Obi-Wan Kenobi (Ewan McGregor) embarcam em uma aventura para tentar salvar o planeta. Viajam com eles a jovem Rainha Amidala (Natalie Portman), que é visada pela Federação pois querem forçá-la a assinar um tratado político. Eles têm de viajar para os distantes planetas Tatooine e Coruscant em uma desesperada tentativa de salvar o mundo de Darth Sidious (Ian McDiarmid), o demoníaco líder da Federação que sempre surge em imagens tridimensionais (a ameaça fantasma). Durante a viagem, Qui-Gon Jinn conhece um garoto de nove anos que deseja treiná-lo para ser tornar um Jedi, pois o menino tem todas as qualidades para isto. Mas o tempo revelará que nem sempre as coisas são o que aparentam.
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
    width: "90%"
  },
});


export default Trilogia3;