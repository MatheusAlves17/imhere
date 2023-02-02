import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    flex: 1,
    padding: 24,
  },
  eventTitle: {
    color: "#f6f6f6",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
  },
  eventDate: {
    color: "#d6d6d6",
    fontSize: 16,
  },
  input:{
    backgroundColor: '#272727',
    color:'#f6f6f6',
    padding: 16,
    height: 54,
    flex: 1,
    borderRadius: 5,
    fontSize: 16,
    marginRight: 16
  },
  button:{
    width: 54,
    height: 54,
    backgroundColor: '#235898',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#f8f8f8',
    fontSize: 35
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 48,
  },
  textListEmptyComponent:{
    color: '#d6d6d6',
    fontSize: 14,
    textAlign: 'center'
  }
});
