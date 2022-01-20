import { registerRootComponent } from "expo";
import React from "react";
import App from "./App";
// import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import * as Font from "expo-font";
import configureStore from "./src/store";
import { ImageBackground } from "react-native";
import i18n from "./src/components/Language/i18n";
const store = configureStore();
let customFonts = {
  lato: require("./assets/fonts/Lato-Thin.ttf"),
};
Font.loadAsync(customFonts);
const fontConfig = {
  default: {
    regular: {
      fontFamily: "lato",
      fontWeight: "normal",
    },

    thin: {
      fontFamily: "lato",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    // primary: "red",
    accent: "#f1c40f",
  },
  // fonts: {
  //   ...DefaultTheme.fonts,
  //   fontFamily: "lato",
  // },
  fonts: configureFonts(fontConfig),
};

const RNRedux = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <ImageBackground
        source={require("./assets/solarbackground.jpg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <App />
      </ImageBackground>
    </PaperProvider>
  </Provider>
);
registerRootComponent(RNRedux);
