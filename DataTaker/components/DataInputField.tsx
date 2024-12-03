import { Text, View, StyleSheet } from 'react-native';

type Props = {
    paramName: string;  // the name the user gave the parameter
    paramType?: string;
};

export default function DataInputField( { paramName }: Props) {
    return(
        <View style={styles.container}>
            {/* View for the Parameter name */}
            <View style={styles.header}>
                <Text style={styles.text}>{paramName}</Text>
            </View>

            {/* View for the Input*/}
            <View  style={styles.body}>
                <Text style={styles.text}>hallo</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c7ede4',
        width: "80%",
        height: 120,
        borderRadius: 16,
        flexDirection: "column",
    },
    text: {
        color: '#0',
        fontSize: 20,
        marginLeft: 40,
        marginTop: 10,
    },
    header: {
    },
    body: {
        flex: 1,
        backgroundColor: '#49515b',
        borderRadius: 16,
    },
});