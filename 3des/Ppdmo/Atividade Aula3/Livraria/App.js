import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { db, storage } from './firebaseconfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

export default function App() {

  const [livros, setLivros] = useState([]);

  const [nomeLivro, setNomeLivro] = useState('');
  const [autorLivro, setAutorLivro] = useState('');
  const [editoraLivro, setEditoraLivro] = useState('');
  const [anoLivro, setAnoLivro] = useState('');
  const [capaLivro, setCapaLivro] = useState(null);

  const [loading, setLoading] = useState(false);
  const [editingLivroId, setEditingLivroId] = useState(null);

  const livroIcons = ['question']

  const selecionarCapa = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log("Usuário cancelou a ação");
      } else if (response.error) {
        console.error("Erro ao carregar imagem", response.error);
      } else {
        setCapaLivro(response.assets[0].uri);
      }
    });
  };

  const uploadImage = async () => {
    if (!capaLivro) return null;

    const response = await fetch(capaLivro);
    const blob = await response.blob();
    const filename = capaLivro.substring(capaLivro.lastIndexOf('/') + 1);
    const storageRef = ref(storage, `LivrosLidos/${filename}`);

    await uploadBytes(storageRef, blob);
    return await getDownloadURL(storageRef);
  };

  const AdicionarOuAtualizarLivro = async () => {
    try {
      setLoading(true);
      const urlImagem = await uploadImage();

      if (editingLivroId) {
        const livroRef = doc(db, 'LivrosLidos', editingLivroId);
        await updateDoc(livroRef, {
          nome: nomeLivro,
          autor: autorLivro,
          editora: editoraLivro,
          ano: anoLivro,
          capa: urlImagem || null

        });
        alert('Livro Atualizado com sucesso!');
        setEditingLivroId(null);
      } else {
        await addDoc(collection(db, 'LivrosLidos'), {
          nome: nomeLivro,
          autor: autorLivro,
          editora: editoraLivro,
          ano: anoLivro,
          icon: livroIcons[Math.floor(Math.random() * livroIcons.length)],
          capa: urlImagem || null
        });
        alert("Livro adicionado com sucesso");
      }

      setNomeLivro("");
      setAutorLivro("");
      setEditoraLivro("");
      setAnoLivro("");
      setCapaLivro(null);
      fetchLivros();
    } catch (e) {
      console.error("Erro ao salvar livro", e);
    } finally {
      setLoading(false)
    }
  }






  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
