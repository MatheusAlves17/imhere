import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";
export function Home() {
  const participants = ["Harry", "Hermione", "Ron", "Gina", "Nevile", "Luna", "Fred", "Jorge", "Olívio", "Malfoy", "Crable", "Goyle", "Percy", "Anna", "Cedrico"];

  function handleParticipantAdd() {
    console.log("Participante adicionado com sucesso!");
  }
  function handleParticipantRemove(name: string) {
    console.log(`Participante ${name} removido com sucesso!`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Quadrilha</Text>
      <Text style={styles.eventDate}>02 de fevereiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant: string) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => {
              handleParticipantRemove("mk");
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
