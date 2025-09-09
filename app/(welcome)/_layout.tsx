import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  );
}
