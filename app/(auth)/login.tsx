import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 30,
        display: "flex",
        gap: 20,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 28 }}>
        Login To Continue
      </Text>
      <TextInput
        placeholder="Enter Your Username or email"
        style={{
          borderWidth: 1,
          padding: 18,
          borderRadius: 10,
          borderColor: "lightgrey",
          color: "black",
        }}
      />

      <TextInput
        placeholder="Enter Your Password"
        secureTextEntry={true}
        style={{
          borderWidth: 1,
          padding: 18,
          borderRadius: 10,
          borderColor: "lightgrey",
          color: "black",
        }}
      />

      <TouchableOpacity
        style={{ padding: 18, backgroundColor: "black", borderRadius: 10 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </TouchableOpacity>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Don't have an account ? </Text>
        <TouchableOpacity style={{ width: "auto" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold" }}
            onPress={() => router.push("/(auth)/signup")}
          >
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
