import { Tabs } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from "../theme";

export default function Laytout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome6 name="list-ul" size={size} color={color} />
          }
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name="clock" size={size} color={color} />
          }
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="bulb-outline" size={size} color={color} />
          }
        }}
      />
    </Tabs>
  );
}