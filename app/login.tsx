import LoginForm from "@/components/LoginForm";
import { colors } from "@/constants/colors";
import { fonts, fontSizes } from "@/constants/fonts";
import { height, iconSizes, sizes } from "@/constants/sizes";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const logo = require("@/assets/images/logo.png");
const ale = require("@/assets/images/ale.png");
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} height={100} width={100} style={styles.logo} />
      <ScrollView>
        <LoginForm />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Ale</Text>
        <Image
          source={ale}
          height={sizes.xl}
          width={sizes.xl}
          style={styles.ale}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: { margin: "auto", width: 180, resizeMode: "contain" },
  container: {
    backgroundColor: colors.primaryBase,
    height: height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  footer: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: sizes.s,
  },
  footerText: {
    color: colors.white,
    fontFamily: fonts.inter.regular,
    fontSize: fontSizes.body,
  },
  ale: {
    width: iconSizes.big,
    resizeMode: "contain",
  },
});
