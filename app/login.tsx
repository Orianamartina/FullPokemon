import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import { colors } from "@/constants/colors";
import { height } from "@/constants/sizes";
import { Redirect } from "expo-router";
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native";

const logo = require("@/assets/images/logoVertical.png");

const Login = () => {
  const auth = true;
  if (auth) return <Redirect href="/" />;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} height={100} width={100} style={styles.logo} />
      <ScrollView>
        <LoginForm />
      </ScrollView>
      <Footer />
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
});
