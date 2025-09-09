import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
// import { FaHouse } from "react-icons/fa6";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={18}
              color={focused ? "#5683ffff" : "#a2a2a2ff"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="book"
              size={18}
              color={focused ? "#5683ffff" : "#a2a2a2ff"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
