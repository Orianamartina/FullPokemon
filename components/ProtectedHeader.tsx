import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { useRouter } from "expo-router";
import { LogOut } from "lucide-react-native";
import { Image, Pressable, StyleSheet, View } from "react-native";

const logo = require("@/assets/images/logo/logoHorizontalLight.png");
const avatar = require("@/assets/images/Avatar.png");

export default function ProtectedHeader() {
  const router = useRouter();
  return (
    <View style={[styles.row, styles.header]}>
      <Image source={logo} style={[styles.logo, { width: 120, height: 30 }]} />
      <View style={[styles.row, styles.icons]}>
        <Pressable onPress={() => router.dismissTo("/myPokemon")}>
          <Image source={avatar} style={{ height: 30, width: 30 }} />
        </Pressable>
        <LogOut color={colors.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: sizes.m,
    justifyContent: "space-between",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 130,

    resizeMode: "contain",
    margin: 0,
  },

  icons: {
    gap: sizes.l,
  },
});
