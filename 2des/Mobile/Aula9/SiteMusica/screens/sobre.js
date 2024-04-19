import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sobre Nós</Text>
            <Text>  Escute Aqui é o seu destino musical definitivo, onde a paixão pela música ganha vida. Conectamos
                pessoas apaixonadas por melodias e ritmos em uma plataforma vibrante e envolvente. Explore uma vasta
                coleção de músicas, descubra novos artistas e compartilhe suas faixas favoritas com amigos. Deixe-se
                levar pelo poder da música em Escute Aqui - onde cada nota conta uma história e cada batida ressoa
                com emoção. Junte-se a nós e mergulhe em um mundo de sons inesquecíveis.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Sobre;