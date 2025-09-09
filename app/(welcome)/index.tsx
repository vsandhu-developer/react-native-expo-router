import { useAuth } from "@/context/authContext";
import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {user ? (
        <>
          <Text>Welcome, {user.email}</Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <Text style={{ textAlign: "center", color: "black" }}>
          Please log in or sign up.
        </Text>
      )}
    </View>
  );
}
