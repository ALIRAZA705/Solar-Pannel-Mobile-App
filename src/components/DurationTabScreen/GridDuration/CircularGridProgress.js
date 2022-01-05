import React, { useRef } from "react";
import { View, Animated, Text } from "react-native";
import { RotationGestureHandler } from "react-native-gesture-handler";
const emptyColor = "#a0a0a1";
const progressColor = "#0085ff";
const size = 200;
const EmptyCircle = () => {
  return (
    <View
      style={{
        borderColor: "#a0a0a1",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "200px",
        borderRadius: 50,
      }}
    ></View>
  );
};

export default function CircularProgressbar({ progress = 0 }, props) {
  const animatedProgress = useRef(new Animated.Value(0)).current;
  const animateProgress = useRef((toValue) => {
    Animated.spring(animatedProgress, {
      toValue,
      useNativeDriver: true,
      duration: 5000,
    }).start();
  }).current;
  React.useEffect(() => {
    animateProgress(progress);
  }, [animatedProgress, progress]);
  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ["0deg", "180deg"],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Animated.View
        style={{
          borderRadius: 100,
          border: "1px solid white",
          borderWidth: 15,
          width: "200px",
          height: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#a0a0a1",
          transform: [{ rotate: "60deg" }],
        }}
      >
        {/* <Text style={{ color: "white" }}>ali aaaa</Text> */}
      </Animated.View>
      <Animated.View
        style={{
          borderRadius: 100,
          borderWidth: 15,
          width: "200px",
          height: "200px",
          position: "absolute",
          borderLeftColor: "blue",
          borderBottomColor: "blue",
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          transform: [{ rotate: "60deg" }],
        }}
      ></Animated.View>
      <Animated.View
        style={{
          borderRadius: 100,

          borderWidth: 15,
          width: "200px",
          height: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderLeftColor: "#a0a0a1",
          borderBottomColor: "#a0a0a1",
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          position: "absolute",

          // transform: [{ rotate: "-45deg" }],
        }}
      ></Animated.View>
    </Animated.View>
  );
}
