

import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
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

 import { View, Text, TextInput } from 'react-native';


 export default function HomeScreen( ) {
  return(
    <View>
      <Text> Gerenciador de tarefas</Text>
      <TextInput
      placeholder='Digite uma tarefa:'
      />
    </View>
  );
 }
