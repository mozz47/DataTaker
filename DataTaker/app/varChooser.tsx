import { useState } from 'react';
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Linking, TextInput } from "react-native";
import { Link } from 'expo-router';

import Button from "@/components/Button";

export default function VarChooser() {

  const router = useRouter();

  const [textFields, setTextFields] = useState([] as string[]);
  
  function addTextField() {
    // Add a new empty text field to the state
    setTextFields([...textFields, "Hallo"]);
  }

  function onNewTablePress() {
    router.push("/dataInput");
    console.log("pushed Button");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>VarChooser</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={onNewTablePress} text="Add new Data" />
        <Button onPress={addTextField} text="Generiere neues Textfeld" />
        {textFields.map((textField) => (
          <Text>{textField}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
    color: '#fff',
  },
});
