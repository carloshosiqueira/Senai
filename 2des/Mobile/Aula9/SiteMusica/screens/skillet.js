import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

/*
Em resumo, tudo está bugado e parece que precisa do botão de pausar pra acontecer alguma coisa

música travada = após apertar o botão pular
musica parada = apertar o botão de pausar

//Apertar o botão pular com a música tocando faz com que a musica fique travada e depois disso:
1- Com a musica travada, Apertar o botão pausar e continuar faz com que a mesma musica comece do zero
2- Com a musica travada, Apertar o botão tocar não faz nada
3- Com a musica travada, Se apertar o botão pausar e depois tocar, a música pula para a proxima
4- Com a musica travada, Se apertar o botão pausar e depois pular, a música pula para a proxima
------------------------------------
5- Não consegui fazer com que apareça o nome da musica que está tocando 
*/


export default class Skillet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [],
      currentSound: null,
      currentSong: null,
      isPlaying: false
    };
  }

  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playsThroughEarpieceAndroid: true
    });

    this.loadSound(require('../assets/music/skillet/The Resistance.mp3'), 'The Resistance');
    this.loadSound(require('../assets/music/skillet/Awake and Alive.mp3'), 'Awake and alive');
    this.loadSound(require('../assets/music/skillet/Comatose.mp3'), 'Comatose');
    this.loadSound(require('../assets/music/skillet/Hero.mp3'), 'Hero');
    this.loadSound(require('../assets/music/skillet/Monster.mp3'), 'Monster');
  }

  async loadSound(uri, songName) {
    try {
      const sound = new Audio.Sound();
      await sound.loadAsync(uri);
      this.setState(prevState => ({
        sounds: [...prevState.sounds, sound]
      }));
    } catch (error) {
      console.error('Erro ao carregar o áudio: ', error);
    }
  }

  async playSound() {
    const { sounds, isPlaying } = this.state;
    if (!isPlaying && sounds.length > 0) {
      const sound = sounds[0];
      try {
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate(status => {
          if (status.didJustFinish) {
            this.playNextSound();
          }
        });
        this.setState({ currentSound: sound, currentSong: 'Tocando: ' + sound._uri, isPlaying: true });
      } catch (error) {
        console.error('Erro ao reproduzir o áudio: ', error);
      }
    }
  }

  async pauseSound() {
    const { currentSound } = this.state;
    if (currentSound) {
      try {
        await currentSound.pauseAsync();
        this.setState({ isPlaying: false });
      } catch (error) {
        console.error('Erro ao pausar o áudio: ', error);
      }
    }
  }

  async resumeSound() {
    const { currentSound } = this.state;
    if (currentSound) {
      try {
        await currentSound.playAsync();
        this.setState({ isPlaying: true });
      } catch (error) {
        console.error('Erro ao continuar o áudio: ', error);
      }
    }
  }

  async skipSound() {
    const { currentSound } = this.state;
    if (currentSound) {
      try {
        await currentSound.stopAsync();
        this.playNextSound();
        this.playSound(); // Inicia automaticamente a próxima música após pular
      } catch (error) {
        console.error('Erro ao pular o áudio: ', error);
      }
    }
  }

  async playNextSound() {
    const { sounds } = this.state;
    if (sounds.length > 1) {
      const nextSounds = sounds.slice(1);
      this.setState({ sounds: nextSounds });
    } else {
      this.setState({ currentSound: null, currentSong: null, isPlaying: false });
    }
  }

  render() {
    const { currentSong, isPlaying } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.currentSongText}>{currentSong ? currentSong : 'Nenhuma música tocando'}</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Tocar" onPress={() => this.playSound()}/>
          <Button
            title={isPlaying ? "Pausar" : "Continuar"}
            onPress={() => {
              if (isPlaying) {
                this.pauseSound();
              } else {
                this.resumeSound();
              }
            }}
          />

          <Button title="Pular" onPress={() => this.skipSound()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentSongText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});
