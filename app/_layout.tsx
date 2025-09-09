import { AuthProvider } from "@/context/authContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(welcome)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
