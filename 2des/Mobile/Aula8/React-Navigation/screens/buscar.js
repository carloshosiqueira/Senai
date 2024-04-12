import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Buscar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo à tela de busca</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize:20
    },
});

export default Buscar;