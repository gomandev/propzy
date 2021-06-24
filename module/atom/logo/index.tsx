import React, { FC } from "react";
import { Image } from "react-native";

interface IProps {
  size: number;
}

export const Logo: FC<IProps> = ({ size }: IProps) => (
  <Image
    style={{ width: size, height: size }}
    source={require("../../../assets/images/fango.png")}
  />
);
