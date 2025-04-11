import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack initialRouteName="signin/index">
      <Stack.Screen name="signin/index" options={{ headerShown: false }} />
      <Stack.Screen name="signup/index" options={{ headerShown: false }} />
    </Stack>
  );
}
