import React from "react";
import { View, Animated } from "react-native";

const Progress = (props) => {
  const { step, steps, height, animationBarColor, backgroundColor } = props;
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);
  return (
    <View
      style={{
        height,
        backgroundColor: backgroundColor ? backgroundColor : "none",
        borderTopRightRadius: height,
        borderBottomRightRadius: height,
        marginHorizontal: 15,
        marginVertical: 20,
        padding: 0,
        overflow: "hidden",
        height: 24,
      }}
    >
      <Animated.View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: animationBarColor,
          borderRadius: height,
          width: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          height: 23,

          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}
      />
    </View>
  );
};
export default Progress;
