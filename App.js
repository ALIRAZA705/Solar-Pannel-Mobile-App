import * as React from "react";
import { View, StyleSheet, Text, I18nManager, Alert } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/components/screens/RootStackScreen";
import { ActivityIndicator } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import * as Font from "expo-font";
import Tabs from "./src/components/navigation/tabs";
import Apptheme from "./Apptheme";
import { whiteLabelStylingInfo } from "./src/store/actions/WhiteLabelStyling";
import { useTranslation } from "react-i18next";
import LanguageDialog from "./src/components/Language/i18n/LanguageDialog";
import { TouchableOpacity } from "react-native-gesture-handler";

var data = {
  A: {
    color: "red",
  },
  B: {
    color: "#006600",
  },
};
let rules = [];

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = React.useState(true);
  const { t, i18n } = useTranslation();
  const [jsonData, setJsonData] = React.useState({});
  const loadingClubVenueAddData = useSelector(
    (state) => state.FaData.loadingClubVenueAddData
  );
  const whiteLabelStyle = useSelector(
    (state) => state.WhiteLabelStyling.whiteLabelStyle
  );
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => {
    setVisible(true);
    console.log("here si the dialog :");
  };

  const hideDialog = (event) => {
    setVisible(event);
  };

  React.useEffect(() => {
    console.log("here is the css ", Apptheme.h1);
    setTimeout(() => {
      setIsloading(false);
      setJsonData(data);
    }, 1000);
    Font.loadAsync({
      Lato: require("./assets/fonts/Lato-Thin.ttf"),
    });
    dispatch(whiteLabelStylingInfo(false));

    // .then(() => {

    // });
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
        <View style={styles.app}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginRight: 20,
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={showDialog}>
              <Text style={{ color: "white", fontSize: 20 }}>
                {i18n.language.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
          <LanguageDialog visible={visible} hideDialog={hideDialog} />

          {loadingClubVenueAddData != true ? <Tabs /> : <RootStackScreen />}
        </View>

        {/* {loadingClubVenueAddData != true ? <RootStackScreen /> : <Tabs />} */}
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
  app: {
    flex: 1,
  },
  button: {
    backgroundColor: "#264A88",
    paddingVertical: 20,
    alignSelf: "center",
    // marginVer: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  tabContainer: {
    flex: 1,
  },
});
