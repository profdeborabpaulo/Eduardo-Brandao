 import { View, Text, TextInput, Stylesheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const[tarefa, setTarefa]=useState('');
  const[tarefa, setTarefa]=useState([
    'estudar react-native',
    'aprender useState',
    'criar a primeira tela',
  ]);
  
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Agendador de Tarefas",
        }}
      />

      <Stack.Screen
        name="nova-tarefa"
        options={{
          title: "Nova Tarefa",
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },
});
