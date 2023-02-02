import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#272727",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10,

    },
  textCard: {
    flex: 1,
    fontSize: 16,
    margin: 16,
    color: "#f6f6f6",
  },
  buttonCard: {
    width: 54,
    height: 54,
    backgroundColor: "#E23C44",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#f8f8f8",
    fontSize: 35,
  },
});
