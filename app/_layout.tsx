import { Stack } from "expo-router";
import "./globals.css";
import { ToastProvider } from "@/components/shared/Toast";

export default function RootLayout() {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} redirect />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ToastProvider>
  );
}
