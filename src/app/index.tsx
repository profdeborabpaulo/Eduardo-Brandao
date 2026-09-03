import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([
    'Estudar React-Native',
    'Aprender useState',
    'Criar a primeira tela',
  ]);

  function adicionarTarefas() {
    if (!tarefa.trim()) return; // Impede tarefas em branco
    setTarefas([...tarefas, tarefa]);
    setTarefa('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa: "
        value={tarefa}
        onChangeText={setTarefa}
      />

      <Button title="Adicionar" onPress={adicionarTarefas} />

      {tarefas.map((item, index) => (
        <Text key={index} style={styles.item}>
          . {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
  item: {
    fontSize: 16,
    marginTop: 8,
  },
});