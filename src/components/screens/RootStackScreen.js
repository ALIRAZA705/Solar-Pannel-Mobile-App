import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GetStartedScreen from "./GetStartedScreen";
import SignInScreen from "./SignInScreen";
import SignOutScreen from "./SignOutScreen";
import SplashScreen from "./SplashScreen";
const RootStack = createStackNavigator();
function RootStackScreen(props) {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="splashScreen" component={GetStartedScreen} />
      <RootStack.Screen name="signInScreen" component={SignInScreen} />
      <RootStack.Screen name="signOutScreen" component={SignOutScreen} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
