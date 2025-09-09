import { View } from "react-native";
import LoginScreen from "./login";

export default function AuthScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <LoginScreen />
    </View>
  );
}
