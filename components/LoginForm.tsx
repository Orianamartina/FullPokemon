import { colors } from "@/constants/colors";
import { fontStyles } from "@/constants/fonts";
import { buttonSizes, sizes } from "@/constants/sizes";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./ui/Button";
import FormInput from "./ui/FormInput";
import PasswordInput from "./ui/PasswordInput";

const LoginForm = () => {
  const router = useRouter();
  const isValid = true;
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <FormInput
          value={""}
          placeholder="Full Name"
          onChange={() => {}}
          field="fullName"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Password</Text>
        <PasswordInput
          value={""}
          placeholder="Password"
          onChange={() => {}}
          field="password"
        />
      </View>
      <Button
        text="Log in"
        onClick={() => {
          if (isValid) {
            router.replace("/");
          }
        }}
        variant="primary"
        size={buttonSizes.large}
        state={isValid ? "enabled" : "disabled"}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: sizes.l,
    display: "flex",
    gap: sizes.xl,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: sizes.s,
    padding: sizes.xl,
  },
  inputGroup: {
    width: "100%",
  },
  inputLabel: { ...fontStyles.inputLabel, marginBottom: sizes.s },
});
