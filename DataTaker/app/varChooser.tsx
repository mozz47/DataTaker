import { useRouter } from "expo-router";
import { ScrollView, View, StyleSheet } from "react-native";

import Button from "@/components/Button";
import PlusButton from "@/components/PlusButton";

export default function VarChooser() {

  const router = useRouter();

  function onNewTablePress() {
    router.push("/dataInput");
    console.log("Debug: Pushed button to link to data input page.");
  }

  return (
    <View style={styles.container}>
      
      {/* MAIN CONTENT VIEW */}
      <View style={styles.buttonContainer}>
        {/* CREATE NEW FIELD BUTTON */}
        <PlusButton onPress={() => {} }/>
      </View>

      {/* FOOTER */}
      <View style={styles.footerContainer}>
        {/* DONE BUTTON */}
        <Button onPress={onNewTablePress} text="Done (Link to dataInput)" />
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
    flex: 3 / 4,
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 4,
    alignItems: 'center',  // horizontal centering
    justifyContent: 'center',  // vertical centering
    backgroundColor: '#49515b',  // color
  },
});
