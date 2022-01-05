import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import FontAwesome5Icon from "react-native-vector-icons/fontawesome5";
import Progress from "../../screens/ProgressBar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function DaysGridDuration(props) {
  const { Icon, backgroundColor, marginVertical } = props;

  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#16388F",
        borderRadius: 10,
        marginVertical: marginVertical,
      }}
    >
      {Icon == "Solar" ? (
        <FontAwesome5Icon
          name="solar-panel"
          size={20}
          style={styles.Icon}
          color={backgroundColor}
        />
      ) : Icon == "Grid" ? (
        <MaterialCommunityIcons
          name="transmission-tower"
          size={20}
          style={styles.Icon}
          color={backgroundColor}
        />
      ) : Icon == "Battery" ? (
        <MaterialCommunityIcons
          name="battery-charging-30"
          size={20}
          style={styles.Icon}
          color={backgroundColor}
        />
      ) : null}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          marginHorizontal: 12,
        }}
      >
        <Text style={{ fontFamily: "Lato", color: "white", fontSize: 15 }}>
          June 18 - July 18
        </Text>
        <Text
          style={{
            fontFamily: "Lato",
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          6000 PKR
        </Text>
      </View>
      <Progress
        step={5}
        steps={10}
        height={20}
        animationBarColor={backgroundColor}
        backgroundColor={"#0D2162"}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  Icon: {
    margin: 10,
  },
});
