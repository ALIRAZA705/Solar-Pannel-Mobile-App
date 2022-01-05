import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Caption } from "react-native-paper";

export default function index(props) {
  const { parentCallback } = props;
  const [selectedTab, setSelectedTab] = React.useState("DAYS");

  const handleDurationSelector = (duration) => {
    setSelectedTab(duration);
    parentCallback(duration);
  };

  return (
    <View style={styles.tabs}>
      <View style={styles.tabContainer}>
        <View
          style={
            selectedTab == "DAYS" ? styles.selectedTab : styles.notSelectedTab
          }
        >
          <TouchableOpacity>
            <View>
              <Button
                onPress={() => handleDurationSelector("DAYS")}
                color={selectedTab == "DAYS" ? "white" : "#28599C"}
              >
                DAYS
              </Button>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={
            selectedTab == "WEEKS" ? styles.selectedTab : styles.notSelectedTab
          }
        >
          <TouchableOpacity>
            <Button
              onPress={() => handleDurationSelector("WEEKS")}
              color={selectedTab == "WEEKS" ? "white" : "#28599C"}
            >
              WEEKS
            </Button>
          </TouchableOpacity>
        </View>
        <View
          style={
            selectedTab == "YEARS" ? styles.selectedTab : styles.notSelectedTab
          }
        >
          <TouchableOpacity>
            <Button
              onPress={() => handleDurationSelector("YEARS")}
              color={selectedTab == "YEARS" ? "white" : "#28599C"}
            >
              YEARS
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    border: "1px light grey",
    borderRadius: 40,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "#122c78",
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
});
