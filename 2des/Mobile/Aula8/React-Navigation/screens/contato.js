import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Contato = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo à tela de contato</Text>
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

export default Contato;