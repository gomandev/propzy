import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Button } from "../../module/atom/button";
import { Logo } from "../../module/atom/logo";
import { useNavigation } from "@react-navigation/native";

export const Onboard = () => {
  const navigation = useNavigation();
  return (
    <View
      style={tw.style("items-center justify-center flex-1 bg-white w-full")}
    >
      <Logo size={200} />
      <Button onClick={() => navigation.navigate("Login")}>Login</Button>
    </View>
  );
};
