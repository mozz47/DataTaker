import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Linking } from "react-native";
import { Link } from 'expo-router';

import Button from "@/components/Button";

export default function Index() {

  const router = useRouter();

  function onNewTablePress() {
    router.push("/varChooser");
    console.log("pushed Button");
  }

  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={onNewTablePress} text="Add new Table"></Button>
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