import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Button } from "../../module/atom/button";
import { Logo } from "../../module/atom/logo";
import { Container } from "../../module/block/container";
import { AntDesign } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

export const Seller = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value: string) => setEmail(value);
  const handlePasswordChange = (value: string) => setPassword(value);
  const Signin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const eChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    handleEmailChange(value);
  };
  const pChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    handlePasswordChange(value);
  };
  return (
    <View style={tw.style("flex-1 bg-white")}>
      <Container>
        <View style={tw.style("mt-16")}>
          <Text style={tw.style("text mb-2 text-2xl font-bold")}>
            Welcome Back,
          </Text>
          <Text style={tw.style("text text-gray-400 text-base")}>
            Login To Continue
          </Text>
        </View>
        <View style={tw.style("flex justify-end items-end mt-5")}>
          <TouchableOpacity onPress={() => navigation.navigate("Onboard")}>
            <AntDesign
              name="leftcircleo"
              style={tw.style("text-purple-400")}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={tw.style("mt-10 mb-16")}>
          <TextInput
            style={tw.style(
              "focus:border-purple-400 border rounded-md py-4 border-gray-300 px-3 w-full"
            )}
            placeholder="Name"
            onChange={eChange}
          />
          <TextInput
            style={tw.style(
              "focus:border-purple-400 border rounded-md py-4 border-gray-300 px-3 w-full mt-4 "
            )}
            secureTextEntry={true}
            placeholder="Password"
            textContentType="password"
            onChange={pChange}
          />
          <View style={tw.style("flex justify-end items-end")}>
            <TouchableOpacity>
              <Text style={tw.style("text-xs")}>forgot password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button fill onClick={Signin}>
          Continue
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={tw.style("mt-28")}
        >
          <Text style={tw.style("text-md text-center")}>
            I'm a new user
            <Text style={tw.style("text-purple-400")}>Signup</Text>
          </Text>
        </TouchableOpacity>
      </Container>
    </View>
  );
};
