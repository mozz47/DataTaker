import { View, StyleSheet, TextInput } from 'react-native';

import DropdownComponent from "@/components/DropdownComponent";

export default function ParameterSelectionField() {
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Text Input"
            />
            <DropdownComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#49515b',
        width: '55%',
        height: 120,
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 5,
    },
    input: {
        marginTop: 7,
        height: 40,
        width: '90%',
        paddingLeft: 10,
        borderColor: '#0',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
});