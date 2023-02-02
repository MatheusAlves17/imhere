import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type TParticipantProps = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: TParticipantProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.textCard}>{name}</Text>
      <TouchableOpacity style={styles.buttonCard} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
