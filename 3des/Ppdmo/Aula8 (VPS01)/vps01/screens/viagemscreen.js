import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { db, storage } from '../firebaseconfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ViagemScreen({ route }) {
    const { userId } = route.params; // Get user ID from route params

    const [viagens, setViagens] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null);
    const [data, setData] = useState('');
    const [local, setLocal] = useState('');
    const [loading, setLoading] = useState(false);
    const [editingViagemId, seteditingViagemId] = useState(null);

    const selecionarFoto = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.error) {
                setImagem(response.assets[0].uri);
            }
        });
    };

    const uploadImage = async () => {
        if (!imagem) return null;

        const response = await fetch(imagem);
        const blob = await response.blob();
        const filename = imagem.substring(imagem.lastIndexOf('/') + 1);
        const storageRef = ref(storage, `LivrosLidos/${filename}`);

        await uploadBytes(storageRef, blob);
        const imageUrl = await getDownloadURL(storageRef);
        console.log("Imagem carregada com sucesso:", imageUrl); // Verifique aqui
        return imageUrl;
    };

    const AdicionarOuAtualizar = async () => {
        try {
            setLoading(true);
            const imageUrl = await uploadImage();

            if (editingViagemId) {
                const viagemRef = doc(db, 'LivrosLidos', editingViagemId);
                await updateDoc(viagemRef, {
                    titulo: titulo,
                    descricao: descricao,
                    local: local,
                    data: data,
                    imageUrl: imageUrl || null,
                });
                alert('Viagem Atualizada com sucesso!');
                seteditingViagemId(null);
            } else {
                await addDoc(collection(db, 'LivrosLidos'), {
                    titulo: titulo,
                    descricao: descricao,
                    local: local,
                    data: data,
                    imageUrl: imageUrl || null,
                    userId: userId, // Save user ID with each viagem
                });
                alert("Viagem adicionado com sucesso");
            }

            setTitulo("");
            setDescricao("");
            setData("");
            setLocal("");
            setImagem(null);
            fetchViagens();
        } catch (e) {
            console.error("Erro ao salvar viagem", e);
        } finally {
            setLoading(false)
        }
    };

    const fetchViagens = async () => {
        try {
            const q = query(collection(db, 'LivrosLidos'), where('userId', '==', userId)); // Filter by user ID
            const querySnapshot = await getDocs(q);
            const listaViagem = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            setViagens(listaViagem);
        } catch (e) {
            console.error("Erro ao buscar viagens", e);
        }
    };

    const editarViagem = (viagem) => {
        setTitulo(viagem.titulo);
        setDescricao(viagem.descricao);
        setData(viagem.data);
        setLocal(viagem.local);
        setImagem(viagem.imageUrl);
        seteditingViagemId(viagem.id);
    }

    const excluirViagem = async (viagemId) => {
        try {
            await deleteDoc(doc(db, 'LivrosLidos', viagemId));
            alert("Viagem excluída com sucesso!");
            fetchViagens();
        } catch (e) {
            console.error("Erro ao excluir viagem", e);
        }
    };

    useEffect(() => {
        fetchViagens();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Viagens</Text>

            <Text style={styles.label}>Titulo</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o titulo"
                value={titulo}
                onChangeText={setTitulo}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite descrição da viagem"
                value={descricao}
                onChangeText={setDescricao}
            />

            <Text style={styles.label}>Data</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual o dia da viagem?"
                value={data}
                onChangeText={setData}
            />

            <Text style={styles.label}>Para onde é a viagem?</Text>
            <TextInput
                style={styles.input}
                placeholder="Escreva o destino(local) da viagem"
                value={local}
                onChangeText={setLocal}
            />

            <Button
                title="Selecionar Imagem"
                onPress={selecionarFoto}
                color="#4682b4"
            />

            {imagem && (
                <Image
                    source={imagem ? { uri: imagem } : { uri: 'https://via.placeholder.com/200x200' }}
                    style={styles.imagePreview}
                />
            )}

            <Button
                title={loading ? "Salvando..." : editingViagemId ? "Atualizar viagem" : "Adicionar viagem"}
                onPress={AdicionarOuAtualizar}
                color="#6b8e23"
            />

            <Text style={styles.sectionTitle}>Lista de viagens</Text>
            <FlatList
                data={viagens}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    console.log("Renderizando viagem:", item);
                    console.log("Image URL:", item.imageUrl);

                    return (
                        <View style={styles.itemViagem}>
                            {item.imageUrl && item.imageUrl.trim() !== '' ? (
                                <Image source={{ uri: item.imageUrl }} style={styles.imagem} />
                            ) : (
                                <Icon name="image" size={50} color="#4682b4" />
                            )}

                            <View style={styles.detalhesViagem}>
                                <Text style={styles.titulo}>{item.titulo}</Text>
                                <Text style={styles.descricao}>{item.descricao}</Text>
                                <Text style={styles.data}>{item.data}</Text>
                                <Text style={styles.local}>{item.local}</Text>
                            </View>
                            <View style={styles.actionButtons}>
                                <TouchableOpacity onPress={() => editarViagem(item)} style={styles.actionButton}>
                                    <Icon name="edit" size={25} color="#4682b4" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => excluirViagem(item.id)} style={styles.actionButton}>
                                    <Icon name="trash" size={25} color="#ff6347" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
                style={styles.listaViagens}
            />
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
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginVertical: 10,
        alignSelf: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    itemViagem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        elevation: 2, // shadow effect
    },
    detalhesViagem: {
        flex: 1,
        marginLeft: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    descricao: {
        color: '#666',
    },
    data: {
        color: '#666',
    },
    local: {
        color: '#666',
    },
    actionButtons: {
        flexDirection: 'row',
    },
    actionButton: {
        marginLeft: 10,
    },
    imagem: {
        width: 75, // Fixed width
        height: 75, // Fixed height
        borderRadius: 5,
        alignSelf: 'center', // Center the image within the parent
      },
});
