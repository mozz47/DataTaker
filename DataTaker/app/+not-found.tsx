import { View, StyleSheet, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! 404 Not Found' }} />
      <View style={styles.container}>
      <AntDesign name="frown" size={55} color="#fff"/>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
