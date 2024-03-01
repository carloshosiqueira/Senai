import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

export default function FormIMC(){
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');
    const [imc, setIMC] = React.useState('');

    const calcIMC = () => {
        const numberPeso = Number(peso);
        const numberAltura = Number(altura);
        setIMC ((numberPeso/(numberAltura ** 2)).toFixed(2))
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Calculadora de IMC</Text>

                    <MaskInput
                        mask={[/\d/, /\d/, /\d/, '.', /\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setPeso(masked)}
                        value={peso}
                        placeholder='Digite seu peso'
                        keyboardType='numeric'
                />
                    <MaskInput
                    mask={[/\d/, '.', /\d/,/\d/]}
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setAltura(masked)}
                    value={altura}
                    placeholder='Digite sua altura'
                    keyboardType='numeric'
                    />

                    <TouchableOpacity
                    style={styles.button}
                    onPress={calcIMC}
                    >
                        <Text>Calcular</Text>
                    </TouchableOpacity>
                    <Text>Seu IMC é: {imc}</Text>
                </View>
            </View>
            </>
)
}
const styles = StyleSheet.create({
    container: {
        flex:1,
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
    button: {
        alignItems: 'center',
        backgroundcolor: '#f0f0f0',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    
    }
})