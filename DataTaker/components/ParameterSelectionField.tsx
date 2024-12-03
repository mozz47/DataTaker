import { View, StyleSheet, TextInput } from 'react-native';

export default function ParameterSelectionField() {
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Text Input"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingLeft: 10,
        borderRadius: 5,
    },
});