import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const home = () => {
  const isAutheticated = false;

  if (!isAutheticated) return <Redirect href="/login" />;

  return (
    <View>
      <Text>home</Text>
    </View>
  );
};

export default home;
