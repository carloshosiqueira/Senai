import React, { useState } from 'react'; // Import useState
import { StyleSheet, View, Button, Text, TextInput, Alert } from 'react-native'; // Import TextInput and Alert
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Ensure you're importing firebase auth methods

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const auth = getAuth();
        console.log("Attempting login with:", email, password); // Log the email and password
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigation.navigate('Viagem', { userId: user.uid });
        } catch (error) {
            console.error("Login Error:", error); // Log the error for debugging
            Alert.alert('Login Error', error.message);
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />

            <Text style={styles.prompt}>Não tem uma conta?</Text>
            <Button
                title="Registrar"
                onPress={() => navigation.navigate('Registro')}
                color="#4682b4"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    prompt: {
        marginTop: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
