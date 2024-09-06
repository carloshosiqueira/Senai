import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Image, Switch } from 'react-native';
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
  const [status, setStatus] = useState(true);

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
      const imageUrl = await uploadImage();

      if (editingLivroId) {
        const livroRef = doc(db, 'LivrosLidos', editingLivroId);
        await updateDoc(livroRef, {
          nome: nomeLivro,
          autor: autorLivro,
          editora: editoraLivro,
          ano: anoLivro,
          imageUrl: imageUrl || null,
          status: livro.status, // use the existing status property
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
          imageUrl: imageUrl || null,
          status: true, // set the initial status to true
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
  };

  const fetchLivros = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'LivrosLidos'));
      const listaLivros = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setLivros(listaLivros);
    } catch (e) {
      console.error("Erro ao buscar livros", e);
    }
  };

  const editarLivros = (livro) => {
    setNomeLivro(livro.nome);
    setAutorLivro(livro.autor);
    setEditoraLivro(livro.editora);
    setAnoLivro(livro.ano);
    setCapaLivro(livro.imageUrl);
    setEditingLivroId(livro.id);
  }

  const excluirLivro = async (livroId) => {
    try {
      await deleteDoc(doc(db, 'LivrosLidos', livroId));
      alert("Livro excluído com sucesso!");
      fetchLivros();
    } catch (e) {
      console.error("Erro ao excluir livro", e);
    }
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Livraria</Text>

      <Text style={styles.label}>Nome do Livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do livro"
        value={nomeLivro}
        onChangeText={setNomeLivro}
      />

      <Text style={styles.label}>Autor do livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o autor do livro"
        value={autorLivro}
        onChangeText={setAutorLivro}
      />

      <Text style={styles.label}>Editora do livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a editora do livro"
        value={editoraLivro}
        onChangeText={setEditoraLivro}
      />

      <Text style={styles.label}>Ano do livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o ano de lançamento do livro"
        value={anoLivro}
        onChangeText={setAnoLivro}
      />

      <Button
        title="Selecionar Imagem"
        onPress={selecionarCapa}
        color="#4682b4"
      />

      {capaLivro && (
        <Image source={{ uri: capaLivro }} style={styles.imagePreview} />
      )}

      <Button
        title={loading ? "Salvando..." : editingLivroId ? "Atualizar livro" : "Adicionar livro"}
        onPress={AdicionarOuAtualizarLivro}
        color="#6b8e23"
      />

      <Text style={styles.sectionTitle}>Lista de livros</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemLivro, { backgroundColor: item.status ? '#c6f4d6' : '#fff' }]}>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.capaLivro} />
            ) : (
              <Icon name={item.icon} size={50} color="#4682b4" style={styles.iconLivro} />
            )}
            <View style={styles.detalhesLivro}>
              <Text style={styles.nomeLivro}>{item.nome}</Text>
              <Text style={styles.autor}>{item.autor}</Text>
              <Text style={styles.editora}>{item.editora}</Text>
              <Text style={styles.ano}>{item.ano}</Text>
              <Switch
                value={item.status}
                onValueChange={(newValue) => {
                  const livroRef = doc(db, 'LivrosLidos', item.id);
                  updateDoc(livroRef, {
                    status: newValue,
                  });
                  fetchLivros();
                }} />
              <Text style={styles.statusLivro}>{item.status ? "Lido" : "Lendo"}</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => editarLivros(item)} style={styles.actionButton}>
                <Icon name="edit" size={25} color="#4682b4" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirLivro(item.id)} style={styles.actionButton}>
                <Icon name="trash" size={25} color="#ff6347" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={styles.listaLivros}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4682b4',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6b8e23',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4682b4',
    marginTop: 20,
    marginBottom: 10,
  },
  listaLivros: {
    marginTop: 10,
  },
  itemLivro: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  iconLivro: {
    marginRight: 15,
  },
  capaLivro: {
    width: 50,
    height: 75,
    borderRadius: 5,
    marginRight: 15,
  },
  detalhesLivro: {
    flex: 1,
  },
  nomeLivro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  editora: {
    fontSize: 16,
    color: '#555',
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 10,
  },
});