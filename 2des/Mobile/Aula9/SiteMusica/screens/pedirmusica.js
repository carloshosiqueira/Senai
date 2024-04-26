import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const PedidoMusica = () => {
  const [musica, setMusica] = useState('');

  const handleEnviarPedido = () => {
    if (musica.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite o nome da música.');
      return;
    }
    // Aqui você pode adicionar a lógica para enviar o pedido de música
    // Por exemplo, enviar para um servidor ou fazer alguma outra ação
    Alert.alert('Pedido enviado', `Pedido para tocar "${musica}" enviado com sucesso!`);
    // Limpar o campo de texto após o envio
    setMusica('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Digite o nome da música"
        onChangeText={text => setMusica(text)}
        value={musica}
      />
      <Button
        title="Enviar Pedido"
        onPress={handleEnviarPedido}
      />
    </View>
  );
};

export default PedidoMusica;
