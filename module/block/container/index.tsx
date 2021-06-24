import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";

export const Container = ({ children }: any) => (
  <View style={tw.style("px-8")}>{children}</View>
);
