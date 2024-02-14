import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Alô Mundo!</Text>
      <Image 
        style={styles.logo}
        source={{
          uri: 'https://media.tenor.com/ggIWe4jxVrUAAAAM/computer-program-program.gif'
        }}
      />
      <StatusBar style="auto" />
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
  logo: {
    width: 498,
    height: 278
  }
});
