import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';
import react from 'react';

export default function FormIMC(){
    const [valor, setValor] = React.useState('');
    const [taxa, setTaxa] = React.useState('');
    const [juros, setJuros] = React.useState('');

    const calcJuros = () => {
        const valorNumber = Number(valor); 
        const taxaNumber = Number(taxa);
        const jurosCalculado = (valorNumber + (valorNumber * taxaNumber / 100));
        setJuros(jurosCalculado);
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Calculadora de Juros</Text>

                    <MaskInput
                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setValor(masked)}
                        value={valor}
                        placeholder='Digite o valor'
                        keyboardType='numeric'
                />
                    <MaskInput
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setTaxa(masked)}
                    value={taxa}
                    placeholder='Digite a taxa de juros'
                    keyboardType='numeric'
                    />

                    <TouchableOpacity
                    style={styles.button}
                    onPress={calcJuros}
                    >
                        <Text>Calcular</Text>
                    </TouchableOpacity>
                    <Text>O total após o juros é: {juros}</Text>
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