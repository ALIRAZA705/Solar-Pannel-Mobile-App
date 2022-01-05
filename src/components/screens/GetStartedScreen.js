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

export default function GetStartedScreen(props) {
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
        <Text style={styles.title}>What if we help you convert</Text>
        <Text style={[styles.title, { fontSize: 20 }]}>
          sunshine into money?
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
          <Text style={[styles.title, { fontSize: 15, color: "#5579AA" }]}>
            Has you electricity bill rising? Don't let
          </Text>
          <Text style={[styles.title, { fontSize: 15, color: "#5579AA" }]}>
            electricity bill control you. Take action.
          </Text>
          <Text style={[styles.title, { fontSize: 15, color: "#5579AA" }]}>
            when we work with your electricity bill
          </Text>
          <Text
            style={[
              styles.title,
              { fontSize: 15, color: "#5579AA", justifyContent: "center" },
            ]}
          >
            goes down.
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
              gradient={gradient}
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
    </>
  );
}
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const gradient = `linear-gradient(45deg, #00ADEE, #0D2162)`;
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
