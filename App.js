import * as React from "react";
import { View, StyleSheet } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/components/screens/RootStackScreen";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import * as Font from "expo-font";
import Tabs from "./src/components/navigation/tabs";

export default function App() {
  const [isLoading, setIsloading] = React.useState(true);
  const loadingClubVenueAddData = useSelector(
    (state) => state.FaData.loadingClubVenueAddData
  );

  React.useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
    Font.loadAsync({
      Lato: require("./assets/fonts/Lato-Thin.ttf"),
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <View style={styles.tabContainer}>
        {/* {loadingClubVenueAddData != true ? <Tabs /> : <RootStackScreen />} */}
        {loadingClubVenueAddData != true ? <RootStackScreen /> : <Tabs />}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  div: {},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  screenContainer: {
    flex: 4,
  },
  tabContainer: {
    flex: 1,
  },
});
