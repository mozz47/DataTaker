import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";

import PlusButton from "@/components/PlusButton";
import DBTestButtons from "@/components/DBTestButtons";

export default function Index() {

  const router = useRouter();

  function onNewTablePress() {
    router.push("/varChooser");
    console.log("pushed Button");
  }

  return (
    <View style={styles.container}>

      {/* MAIN CONTENT VIEW */}
      <View style={styles.buttonContainer}>
        {/* LINK TO VARCHOOSER BUTTON */}
        <PlusButton onPress={onNewTablePress} />
        {/* TEMPORARY TEST BUTTONS FOR DB */}
        <DBTestButtons/>
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
    marginVertical: 30,
    flex: 1,
    alignItems: 'center',
  },
});