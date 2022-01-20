import React from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import Progress from "../../ProgressBar";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Tooltip,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 400,

    amt: 2400,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 2.4,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 200,
    pv: 3.6,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 278,
    pv: 8.2,
    amt: 2000,
  },
];
export default function WeeksProduction(props) {
  return (
    <ScrollView style={styles.container}>
      <Card
        style={{ backgroundColor: "#18388E", margin: 10, borderRadius: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: "#D6DE22", fontFamily: "Lato" }}>
            Production (KW)
          </Text>
        </View>
        <View>
          <Progress
            step={2}
            steps={10}
            height={20}
            animationBarColor={"yellow"}
            backgroundColor={"#0D2162"}
          />

          <Progress
            step={5}
            steps={10}
            height={20}
            animationBarColor={"yellow"}
            backgroundColor={"#0D2162"}
          />

          <Progress
            step={7}
            steps={10}
            height={20}
            animationBarColor={"yellow"}
            backgroundColor={"#0D2162"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#D6DE22",
              fontFamily: "Lato",
              fontWeight: "bold",
            }}
          >
            WEEKLY AVERAGE :
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#D6DE22",
              fontFamily: "Lato",
              left: 10,
              fontWeight: "bold",
            }}
          >
            120 KWH
          </Text>
        </View>
        <View
          style={{
            width: "80%",
            marginRight: 10,
            marginLeft: -5,
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginRight: "10px",
            flexWrap: "wrap",
          }}
        >
          <LineChart
            width={width_screen}
            height={250}
            data={data}
            margin={{ top: 15 }}
          >
            <CartesianGrid strokeDasharray="5 5" />

            <XAxis dataKey="pv" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}

            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </View>
      </Card>
    </ScrollView>
  );
}
const { width } = Dimensions.get("screen");
const width_screen = width * 0.9;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignContent: "center",
  },
});
