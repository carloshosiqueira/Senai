import { View, StyleSheet, Text, Image, Switch } from 'react-native';
import {useState} from 'react';
import React from 'react';


export default function App() {
    const [habilitado, setHabilitado] = useState(false);

    const habilitar = () => {
        setHabilitado(!habilitado);
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Switch
                        value={habilitado}
                        onValueChange={habilitar}
                    />
                    <Image source={{ uri: (habilitado) ? '../assets/imagem_2024-04-05_094404246-removebg-preview.png' : 
                    '../assets/imagem_2024-04-05_094341853-removebg-preview.png' }}  style={styles.imagem}/>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        padding: 5,
        height: 40,
        width: 200,
        borderColor: '#006eff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    imagem:{
        width:200,
        height:200
    },
})