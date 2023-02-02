import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";
export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante já existente",
        "Não foi possível adicionar novo participante"
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('')
    console.log("Participante adicionado com sucesso!");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Tem certeza?", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Removido!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    console.log(`Participante ${name} removido com sucesso!`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Quadrilha de Hogwarts</Text>
      <Text style={styles.eventDate}>02 de fevereiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmptyComponent}>
            Ninguém chegou no evento ainda? Adicione pessoas à sua lista!
          </Text>
        )}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => {
              handleParticipantRemove(item);
            }}
          />
        )}
      />
    </View>
  );
}
