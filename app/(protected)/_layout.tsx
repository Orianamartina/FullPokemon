import Footer from "@/components/Footer";
import ProtectedHeader from "@/components/ProtectedHeader";
import { colors } from "@/constants/colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Redirect, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function ProtectedLayout() {
  const auth = true;

  if (!auth) return <Redirect href={"/login"} />;

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
