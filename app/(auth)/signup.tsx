import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignupScreen() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        padding: 30,
        gap: 20,
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 28 }}>
        Create An Account
      </Text>
      <TextInput
        placeholder="Enter Your Username"
        style={{
          borderWidth: 1,
          padding: 18,
          borderRadius: 10,
          borderColor: "lightgrey",
          color: "black",
        }}
      />

      <TextInput
        placeholder="Enter Your Email"
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
        <Text style={{ color: "white", textAlign: "center" }}>Signup</Text>
      </TouchableOpacity>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Already have an account ? </Text>
        <TouchableOpacity
          style={{ width: "auto" }}
          onPress={() => router.replace("/(auth)/login")}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Login Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
