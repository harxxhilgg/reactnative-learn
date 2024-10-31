import { Link, Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "counter", headerRight: () => {
          return (
            <Link href="/counter/history" asChild>
              <Pressable hitSlop={20}>
                <Entypo name="back-in-time" size={32} color={theme.colorGray} />
              </Pressable>
            </Link>
          )
        }
      }} />
    </Stack>
  )
}