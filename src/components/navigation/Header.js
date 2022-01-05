import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Caption } from "react-native-paper";
export default function Header(props) {
  const [selectedHeaderIcon, setSelectedHeaderIcon] = React.useState("Grid");
  return (
    <View style={styles.headerIcons}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            console.log("here is the selected header ", selectedHeaderIcon);
            setSelectedHeaderIcon("Grid");
          }}
        >
          <MaterialCommunityIcons
            name="transmission-tower"
            size={30}
            style={
              selectedHeaderIcon == "Grid"
                ? styles.Icon
                : [styles.Icon, { color: "grey", border: "2px solid grey" }]
            }
          />
          <Caption
            style={
              selectedHeaderIcon == "Grid"
                ? styles.captionText
                : [styles.captionText, { color: "grey" }]
            }
          >
            Grid
          </Caption>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setSelectedHeaderIcon("Solar")}
        >
          <FontAwesome5
            name="solar-panel"
            size={30}
            style={
              selectedHeaderIcon == "Solar"
                ? styles.Icon
                : [styles.Icon, { color: "grey", border: "2px solid grey" }]
            }
          />
          <Caption
            style={
              selectedHeaderIcon == "Solar"
                ? styles.captionText
                : [styles.captionText, { color: "grey" }]
            }
          >
            Solar
          </Caption>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setSelectedHeaderIcon("Home")}
        >
          <Icon
            name="home-outline"
            size={30}
            style={
              selectedHeaderIcon == "Home"
                ? styles.Icon
                : [styles.Icon, { color: "grey", border: "2px solid grey" }]
            }
          />
          <Caption
            style={
              selectedHeaderIcon == "Home"
                ? styles.captionText
                : [styles.captionText, { color: "grey" }]
            }
          >
            {" "}
            Home
          </Caption>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setSelectedHeaderIcon("Battery")}
        >
          <MaterialCommunityIcons
            name="battery-charging-30"
            size={30}
            style={
              selectedHeaderIcon == "Battery"
                ? styles.Icon
                : [styles.Icon, { color: "grey", border: "2px solid grey" }]
            }
          />
          <Caption
            style={
              selectedHeaderIcon == "Battery"
                ? styles.captionText
                : [styles.captionText, { color: "grey" }]
            }
          >
            {" "}
            Battery
          </Caption>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    fontSize: "50",
  },
  header: {
    flex: 1,

    width: "100%",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  captionText: {
    color: "white",
    paddingVertical: 5,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  Icon: {
    border: "2px solid white",
    borderRadius: 40,
    padding: 13,
    color: "white",
  },
  notSelectedIcon: {
    border: "2px solid white",
    borderRadius: 40,
    padding: 13,
    color: "grey",
  },
  body: {
    flex: 4,
    width: "100%",
  },
  tabs: {
    border: "1px light grey",
    borderRadius: 40,
    marginVertical: 20,
    marginHorizontal: 20,

    backgroundColor: "#122c78",
    // backgroundColor: "#0c37c04d",
    // backgroundColor: " #0712359c",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  selectedTab: {
    border: "1px solid light blue",
    borderRadius: 20,

    backgroundColor: "#00b3f4",
  },
  notSelectedTab: {},
  footer: {
    flex: 1,

    width: "100%",
  },
  informationContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    backgroundColor: "#0712359c",
  },
  gridEnergyInfo: {
    flexDirection: "row",
  },
  textNumber: {
    color: "white",
    border: "1px solid white",
    borderRadius: 50,
    fontSize: 20,
    width: "34px",
    height: "34px",
    textAlign: "center",
    paddingTop: 2,
    backgroundColor: "#00ADEE",
  },
  textValue: {
    color: "#00ADEE",
    fontSize: 12,
    fontWeight: "bold",
  },
  volatgeValue: {
    color: "grey",
    fontSize: 10,
    marginVertical: 0,
  },
  powerInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
