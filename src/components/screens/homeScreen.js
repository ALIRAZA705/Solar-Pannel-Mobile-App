import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackgroundBase,
  ImageBackground,
} from "react-native";
import { Avatar, Caption } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const homeScreen = (props) => {
  const [selectedIcon, setSelectedIcon] = React.useState("");
  return (
    <View style={styles.container}>
      {/* Header */}

      <Animatable.View animation="bounceIn" style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "col" }}>
            <Text style={styles.textHeader}>Welcome to Home!</Text>
            <Caption style={styles.captionText}>
              Make the sun works for you
            </Caption>
          </View>

          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
            }}
            size={50}
            style={{ marginLeft: 10 }}
          />
        </View>
      </Animatable.View>

      {/* Footer */}
      <Animatable.View animation="bounceIn" style={styles.footer}>
        <Animatable.View animation="fadeInUpBig" style={styles.homeTopIcon}>
          <TouchableOpacity onPress={() => setSelectedIcon("Home")}>
            <Icon
              name="home-outline"
              size={40}
              style={
                selectedIcon == "Home" ? styles.Icon : styles.notSelectedIcon
              }
            />
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation="bounceInLeft"
          style={styles.homeBottomIcons}
        >
          <TouchableOpacity onPress={() => setSelectedIcon("Battery")}>
            <MaterialCommunityIcons
              name="battery-charging-30"
              size={30}
              style={
                selectedIcon == "Battery" ? styles.Icon : styles.notSelectedIcon
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedIcon("Solar");
              props.navigation.navigate("SolarScreen");
            }}
          >
            {" "}
            <FontAwesome5
              name="solar-panel"
              size={30}
              style={
                selectedIcon == "Solar" ? styles.Icon : styles.notSelectedIcon
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedIcon("Transmission")}>
            <MaterialCommunityIcons
              name="transmission-tower"
              size={40}
              style={
                selectedIcon == "Transmission"
                  ? styles.Icon
                  : styles.notSelectedIcon
              }
            />
          </TouchableOpacity>
        </Animatable.View>
        <View style={styles.textStatusPosition}>
          <Text style={styles.textStatus}>SYSTEM STATUS</Text>
        </View>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0d2162",
  },
  header: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "lato",
    color: "white",
    paddingVertical: 10,
  },
  captionText: {
    color: "white",
    fontFamily: "lato",

    marginVertical: -10,
    marginHorizontal: 8,
  },
  footer: {
    flex: 4,
    backgroundColor: "#04092aa3",
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  homeTopIcon: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  homeBottomIcons: {
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  textStatusPosition: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStatus: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Lato-Thin",
  },
  Icon: {
    border: "2px solid white",
    borderRadius: 50,
    padding: 25,
    color: "white",
  },
  notSelectedIcon: {
    border: "2px solid grey",
    borderRadius: 50,
    padding: 25,
    color: "grey",
  },
});
export default homeScreen;
