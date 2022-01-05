import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Gradient from "react-native-css-gradient";
import * as Animatable from "react-native-animatable";

export default function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Animatable.View
        style={styles.header}
        animation="bounceIn"
        // duration="1500"
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </Animatable.View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Stay in Connect With Your Solar System</Text>
        <Text style={styles.text}>Sign In with account</Text>
        <View style={styles.Button}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => props.navigation.navigate("signInScreen")}
          >
            <Gradient
              gradient={gradient}
              style={{
                width: "auto",
                height: "auto",
                padding: 13,
                borderRadius: 30,
                alignItems: "flex-end",
                flexDirection: "row",
              }}
            >
              <Text
                style={{ marginRight: "10px", color: "white", fontSize: 15 }}
              >
                Get Started
              </Text>
              <MaterialIcons
                name="navigate-next"
                color="#fff"
                size={20}
                style={{ color: "white" }}
              />
            </Gradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const gradient = `linear-gradient(45deg, #08d4c4, #01ab9d)`;
const styles = StyleSheet.create({
  mystyle: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#009387",
    alignItems: "center",
    justifyContent: "center",
  },
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
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    color: "grey",
  },
  title: {
    fontSize: 30,
    color: "#05375a",
    fontWeight: "bold",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  footer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    width: "100%",
  },
});
