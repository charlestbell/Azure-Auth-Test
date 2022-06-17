import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../screens/auth/Auth";
import HomeScreen from "../screens/home/Home";
import SignInScreen from "../screens/signin/SignIn";

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Auth" component={AuthScreen} />
      <AppStack.Screen name="SignIn" component={SignInScreen} />

      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
