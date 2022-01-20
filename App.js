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
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import RNRestart from "react-native-restart";

var data = {
  A: {
    color: "red",
  },
  B: {
    color: "#006600",
  },
};
let rules = [];
const languages = [
  { name: "English", key: "en" },
  { name: "Arabic", key: "ar" },
  { name: "Detsch", key: "de" },
];

export default function App() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [isLoading, setIsloading] = React.useState(true);
  const [jsonData, setJsonData] = React.useState({});
  const loadingClubVenueAddData = useSelector(
    (state) => state.FaData.loadingClubVenueAddData
  );
  const whiteLabelStyle = useSelector(
    (state) => state.WhiteLabelStyling.whiteLabelStyle
  );
  const [visible, setVisible] = React.useState(false);
  const [appLanguage, setAppLanguage] = React.useState("en");
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  React.useEffect(() => {
    i18n.changeLanguage(appLanguage);
    if (i18n.language == "ar") {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  }, [appLanguage]);
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
  const handleLanguageEditor = (event) => {
    setAppLanguage(event);
  };

  return (
    <NavigationContainer theme={navTheme}>
      <View style={styles.tabContainer}>
        <View style={styles.app}>
          {loadingClubVenueAddData != true ? <Tabs /> : <RootStackScreen />}
        </View>

        <View style={styles.languagesButton}>
          <Button onPress={showDialog} style={styles.button} color="white">
            Change Language
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Select Language</Dialog.Title>
              <Dialog.Content>
                {languages.map((language, index) => {
                  return (
                    <>
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          handleLanguageEditor(language.key);
                          setVisible(false);
                        }}
                        style={
                          appLanguage == language.key
                            ? { backgroundColor: "lightgrey" }
                            : null
                        }
                      >
                        <Text
                          style={{
                            color: "black",
                            fontSize: "15",
                            borderBottomColor: "1px solid grey",
                            padding: 10,
                          }}
                        >
                          {language.name}
                        </Text>
                      </TouchableOpacity>
                    </>
                  );
                })}
              </Dialog.Content>
            </Dialog>
          </Portal>
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
    flex: 5,
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
  languagesButton: {
    flex: 1,
  },

  tabContainer: {
    flex: 1,
  },
});
