import React, { FC, ReactChild } from "react";
import tw from "tailwind-react-native-classnames";
import { Text, TouchableOpacity } from "react-native";

export interface ButtonProps {
  onClick?: (e: any) => void;
  children: ReactChild;
  type?: "button" | "submit" | "reset";
  fill?: boolean;
  outline?: boolean;
  width?: string;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  fill,
  children,
  type = "button",
  outline,
  width,
}) => (
  <TouchableOpacity
    style={tw.style(
      "rounded-md py-4 px-8 text-white bg-purple-400 w-36",
      fill && "w-full"
    )}
    data-testid="main-button-cp"
    onPress={onClick}
  >
    <Text style={tw.style("text-white text-center")}>{children}</Text>
  </TouchableOpacity>
);
