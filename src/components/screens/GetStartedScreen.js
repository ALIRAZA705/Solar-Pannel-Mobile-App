import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  I18nManager,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Gradient from "react-native-css-gradient";
import * as Animatable from "react-native-animatable";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
var data = {
  A: {
    color: "red",
  },
  B: {
    color: "#006600",
  },
  C: {
    color: ["#00ADEE", "#0D2162"],
  },
};
export default function GetStartedScreen(props) {
  const [jsonData, setJsonData] = React.useState({});
  const { t, i18n } = useTranslation();
  const whiteLabelStyle = useSelector(
    (state) => state.WhiteLabelStyling.whiteLabelStyle
  );
  const [gradientColor, setGradientColor] = React.useState(
    `linear-gradient(45deg,#fff, #ffee00)`
  );
  React.useEffect(() => {
    setTimeout(() => {
      setJsonData(data);
    }, 1000);
  }, []);

  React.useEffect(() => {
    console.log("here is the jsondata:", jsonData);
    let gradient;

    gradient = `linear-gradient(45deg, ${whiteLabelStyle.signInButton?.color[0]}, ${whiteLabelStyle.signInButton?.color[1]})`;

    setGradientColor(gradient);
  }, [jsonData]);
  return (
    <>
      <View
        style={[
          styles.header,
          {
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          },
        ]}
      >
        <Text style={[styles.title, whiteLabelStyle.title]}>{t("title1")}</Text>
        <Text style={[styles.title, whiteLabelStyle.title, { fontSize: 20 }]}>
          {t("title2")}
        </Text>
      </View>
      <View style={styles.body}>
        <Animatable.View animation="bounceIn">
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
        </Animatable.View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={[styles.title, whiteLabelStyle.subTitle, { fontSize: 15 }]}
          >
            {t("subtitle1")}
          </Text>
          <Text
            style={[styles.title, whiteLabelStyle.subTitle, { fontSize: 15 }]}
          >
            {t("subtitle2")}
          </Text>
          <Text
            style={[styles.title, whiteLabelStyle.subTitle, { fontSize: 15 }]}
          >
            {t("subtitle3")}
          </Text>
          <Text
            style={[styles.title, whiteLabelStyle.subTitle, { fontSize: 15 }]}
          >
            {t("subtitle4")}
          </Text>
        </View>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={styles.Button}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => props.navigation.navigate("signInScreen")}
          >
            <Gradient
              gradient={gradientColor}
              style={{
                width: "auto",
                height: "auto",
                padding: 13,
                borderRadius: 30,
                alignItems: "flex-end",
                flexDirection: "row",
                marginRight: 10,
              }}
            >
              <Text
                style={{ marginRight: "10px", color: "white", fontSize: 15 }}
              >
                {t("startButton")}
              </Text>
              {i18n.language == "ar" ? (
                <MaterialIcons
                  name="navigate-before"
                  color="#fff"
                  size={20}
                  style={{ color: "white" }}
                />
              ) : (
                <MaterialIcons
                  name="navigate-next"
                  color="#fff"
                  size={20}
                  style={{ color: "white" }}
                />
              )}
            </Gradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </>
  );
}
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  Button: {
    alignItems: "flex-end",
  },
  signInButton: {
    padding: 10,
    width: "50%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#05375a",
    fontWeight: "bold",
    flexDirection: "row",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  body: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  footer: {
    flex: 1,
  },
});
