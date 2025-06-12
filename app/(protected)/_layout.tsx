import Footer from "@/components/Footer";
import ProtectedHeader from "@/components/ProtectedHeader";
import { colors } from "@/constants/colors";
import { Redirect, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProtectedLayout() {
  const auth = true;
  if (!auth) return <Redirect href={"/login"} />;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryBase }}>
      <ProtectedHeader />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="pokemon/[id]" />
      </Stack>
      <Footer />
    </SafeAreaView>
  );
}
