/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { Onboard } from "../screens/Auth/Onboard";
import { Login } from "../screens/Auth/Login";

import NotFoundScreen from "../screens/NotFoundScreen";
import { MainParamList, RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { Signup } from "../screens/Auth/Signup";
import { useState } from "react";
import firebase from "firebase";
import { Home } from "../screens/Profile/Home";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AuthNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function AuthNavigator() {
  const [loggedIn, setLoggedIn] = useState(false);
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    });
  });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!loggedIn ? (
        <>
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </>
      ) : (
        <>
          <Stack.Screen name="Profile" component={Home} />
        </>
      )}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
