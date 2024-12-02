import { Pressable, View, Text, StyleSheet } from 'react-native';

type Props = {
    onPress: () => void;
    text?: string;
    buttonWidth?: number;
  };

export default function Button( {onPress, text, buttonWidth }: Props) {
    return (
        <View style={[styles.buttonContainer, { width: buttonWidth }]}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4, // transparenter Innenring (Dicke)
        borderWidth: 4,
        borderColor: '#ffd33d',  // gelber Rand
        borderRadius: 18,
        marginVertical: 10,  // Platz um Button (vertikal)
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});