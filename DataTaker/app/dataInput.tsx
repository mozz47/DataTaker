// to take the data
import { Text, View, StyleSheet } from "react-native";

import Button from "@/components/Button";

export default function DataInput() {

  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={() => console.log("add data")} text="Add new Data"></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});