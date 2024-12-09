// to take the data
import { Text, View, StyleSheet } from "react-native";

import Button from "@/components/Button";
import DataInputField from "@/components/DataInputField";

export default function DataInput() {

  return (
    <View style={styles.container}>
      {/* MAIN CONTENT VIEW */}
      
      <View style={styles.buttonContainer}>
<<<<<<< HEAD
        <DataInputField paramName="VarName1"/>
=======
        <DataInputField paramName="Z.B. Name"/>
>>>>>>> bead118f51ae2ee935ba443a6c52a6fca5be6685
      </View>

      {/* FOOTER */}
      <View style={styles.footerContainer}>
        {/* DONE BUTTON */}
        <Button buttonWidth={100} onPress={() => {}} text="Done" />
        {/* NEXT BUTTON */}
        <Button buttonWidth={200} onPress={() => {}} text="Next" />
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
    marginVertical: 20,
    flex: 3 / 4,
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 4,
    flexDirection: 'row',
    alignItems: 'center',  // horizontal centering
    justifyContent: 'center',  // vertical centering
    backgroundColor: '#49515b',  // color
  },
});