import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Image, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [habilitado1, setHabilitado1] = useState(false);
  const [habilitado2, setHabilitado2] = useState(false);
  const [habilitado3, setHabilitado3] = useState(false);

  const habilitar1 = () => setHabilitado1(!habilitado1);
  const habilitar2 = () => setHabilitado2(!habilitado2);
  const habilitar3 = () => setHabilitado3(!habilitado3);

  return (
    <LinearGradient
      colors={['green', 'red']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.innerContainer}>
        <View style={[styles.parte, { width: 100, height: 100 }]}>
          <Switch value={habilitado1} onValueChange={habilitar1} />
          <Image source={{ uri: habilitado1 ? "./assets/cabeca-arrow.png" : "./assets/cabeça-ironman.png" }} style={styles.cabeca} />
        </View>
        <View style={[styles.parte, { width: 125, height: 150 }]}>
          <Switch value={habilitado2} onValueChange={habilitar2} />
          <Image source={{ uri: habilitado2 ? "./assets/torso-arrow.png" : "./assets/torso-iroman.png" }} style={styles.torso} />
        </View>
        <View style={[styles.parte, { width: 100, height: 150 }]}>
          <Switch value={habilitado3} onValueChange={habilitar3} />
          <Image source={{ uri: habilitado3 ? "./assets/perna-arrow.png" : "./assets/perna-ironman.png" }} style={styles.perna} />
        </View>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  },
  parte: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cabeca: {
    width: '110px',
    height: '100px'
  },
  torso: {
    width: '140px',
    height: '150px'
  },
  perna: {
    width: '125px',
    height: '150px'
  },
});
