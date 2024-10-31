import { Stack } from "expo-router";

export default function Laytout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Shopping List" }}
      />
    </Stack>
  );
}