import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    paramName: string;  // the name the user gave the parameter
    paramType?: string;
};

export default function DataInputField( { paramName }: Props) {
    const [value, setValue] = useState("");
    const [isEditing, setIsEditing] = useState(true);
    //isEditing = true means the editing button is not shown
    return(
        <View style={styles.container}>
            {/* View for the Parameter name */}
            <View style={styles.header}>
                <Text style={styles.paramNameText}>{paramName}</Text>
            </View>

            {/* View for the Input*/}
            <View  style={styles.body}>
                { isEditing ? (
                    //Enter not pressed
                    <TextInput
                        style={styles.input}
                        placeholder='Value...?'
                        value={value}
                        onChangeText={setValue}
                        onSubmitEditing={ () => setIsEditing(false)} />
                ) : (
                    //Enter pressed
                    <View style={styles.valueContainer}>
                        <Text style={styles.valueText}>{value}</Text>
                        <Pressable
                            style={styles.editButton}
                            onPress={() => setIsEditing(true)}
                        >
                            <AntDesign name="edit" size={24} color="black" />
                        </Pressable>
                    </View>
                )
                }
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c7ede4',
        width: "80%",
<<<<<<< HEAD
        height: 120,
        borderRadius: 8,
=======
        minHeight: 120,
        borderRadius: 16,
>>>>>>> bead118f51ae2ee935ba443a6c52a6fca5be6685
        flexDirection: "column",
        marginVertical: 10,
        alignSelf: 'center',
        overflow: 'hidden', // Damit abgerundete Ecken auch für inneren Bereich gelten
    },
    header: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#c7ede4',
    },
    paramNameText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        backgroundColor: '#49515b',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        color: '#000',
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingLeft: 10,
    },
    valueText: {
        color: '#000',
        fontSize: 18,
    },
    editButton: {
        marginLeft: 10,
        backgroundColor: '#8AA8A1',
        borderRadius: 8,
        padding: 5,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});