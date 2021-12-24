import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {

  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const novoNumero = Math.floor(Math.random() * 10);

    setNumero(novoNumero);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

// Estilos CSS
const style = StyleSheet.create({
  container: {
    backgroundColor: '#77F',
    fontSize: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 32,
    color: '#FFF',
  },
  botao: {
    backgroundColor: '#FFF',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
  },
});
export default App;