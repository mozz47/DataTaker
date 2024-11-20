import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Home', headerTitleAlign: 'center'}} />
    <Stack.Screen name="varChooser" options={{ title: 'Choose Variables', headerTitleAlign: 'center'}} />
    <Stack.Screen name="dataInput" options={{ title: 'Data Input', headerTitleAlign: 'center'}} />
    <Stack.Screen name="+not-found" />
  </Stack>);
}
