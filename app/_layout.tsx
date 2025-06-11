import {
  Epilogue_400Regular,
  Epilogue_700Bold,
  useFonts as useFontsEp,
} from "@expo-google-fonts/epilogue";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Text } from "@react-navigation/elements";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] =
    useFonts({
      Inter_400Regular,
      Inter_700Bold,
    }) &&
    useFontsEp({
      Epilogue_400Regular,
      Epilogue_700Bold,
    });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
