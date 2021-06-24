import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Button } from "../../module/atom/button";
import { Logo } from "../../module/atom/logo";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

export const Home = () => {
  const navigation = useNavigation();
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={tw.style("items-center justify-center flex-1 bg-white w-full")}
    >
      <Text>Hello Man</Text>
      <TouchableOpacity onPress={signOut}>
        <Text style={tw.style("text-xs")}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
};
