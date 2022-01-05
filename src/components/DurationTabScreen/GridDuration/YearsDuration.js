import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import FontAwesome5Icon from "react-native-vector-icons/fontawesome5";
import Progress from "../../screens/ProgressBar";
import AntDesign from "react-native-vector-icons/AntDesign";
import CircularProgressBar from "./CircularGridProgress";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";
import CircularProgress from "react-native-circular-progress-indicator";

export default function YearsGridDuration(props) {
  const { Icon, backgroundColor, marginVertical } = props;
  const props1 = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
  };
  return (
    // <Progress
    //   step={7}
    //   steps={10}
    //   height={20}
    //   backgroundColor={backgroundColor}
    // />
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text
            style={{
              color: "#909E5B",
              fontFamily: "Lato",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Total Energy Usage
          </Text>
          <Text
            style={{
              color: "#B9C355",
              fontFamily: "Lato",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 3,
            }}
          >
            : 5.20 Kwh
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <AnimatedCircularProgress
            size={200}
            width={10}
            fill={80}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
          >
            {(fill) => (
              <Text style={{ color: "white", fontSize: 30 }}>{`${Math.floor(
                fill
              )} KM/h`}</Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            border: "1px solid yellow",
            paddingVertical: 15,
            width: "90%",
          }}
        >
          <Text
            style={{
              color: "#B9C355",
              fontFamily: "Lato",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Solar Detail Graphs
          </Text>
          <AntDesign
            name="arrowright"
            color="#fff"
            style={{ top: 3, marginLeft: 15 }}
            size={20}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Icon: {
    margin: 10,
  },
});
