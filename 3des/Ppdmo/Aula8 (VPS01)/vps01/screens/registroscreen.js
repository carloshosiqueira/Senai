import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { db } from '../firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegistroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const registrarUsuario = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const auth = getAuth();
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Now save user info to Firestore
      await addDoc(collection(db, 'Usuarios'), {
        uid: user.uid, // Store user ID from Firebase Authentication
        nome,
        email,
      });

      Alert.alert("Usuário registrado com sucesso!");
      navigation.goBack(); // Navigate back to login after registration
    } catch (error) {
      console.error("Erro ao registrar usuário", error);
      Alert.alert("Erro ao registrar, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Novo Usuário</Text>
      
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha (minímo de 6 digitos) "
        secureTextEntry
      />

      <Button title="Registrar" onPress={registrarUsuario} color="#6b8e23" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
});
