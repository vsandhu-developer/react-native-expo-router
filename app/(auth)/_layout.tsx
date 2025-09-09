import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function AuthLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
      </Stack>
    </SafeAreaView>
  );
}
