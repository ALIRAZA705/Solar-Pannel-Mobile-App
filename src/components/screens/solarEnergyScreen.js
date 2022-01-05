import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Caption } from "react-native-paper";
import { Dimensions } from "react-native";
import Duration from "./../Duration";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Header from "../navigation/Header";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function SolarEnergyScreen(props) {
  const [selectedDuration, setSelectedDuration] = React.useState("DAYS");
  const handleCallback = (childData) => {
    setSelectedDuration(childData);
  };

  return (
    <View style={styles.container}>
      {/* HEADERs */}
      <View style={styles.header}>
        <Header />
      </View>

      {/* BODY */}

      <View style={styles.body}>
        <Duration parentCallback={handleCallback} />

        {selectedDuration == "DAYS" ? (
          <View
            style={{
              width: "80%",
              marginRight: 10,
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
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </View>
        ) : null}
      </View>
      <View style={styles.footer}>
        {selectedDuration == "DAYS" ? (
          <View style={styles.informationContainer}>
            <View style={styles.gridEnergyInfo}>
              <Text style={styles.textNumber}>1</Text>
              <View style={styles.powerInfo}>
                <Text style={styles.textValue}>0.727 KW</Text>
                <Caption style={styles.volatgeValue}>223.68 V</Caption>
              </View>
            </View>

            <View style={styles.gridEnergyInfo}>
              <Text style={styles.textNumber}>1</Text>
              <View style={styles.powerInfo}>
                <Text style={styles.textValue}>0.727 KW</Text>
                <Caption style={styles.volatgeValue}>223.68 V</Caption>
              </View>
            </View>
            <View style={styles.gridEnergyInfo}>
              <Text style={styles.textNumber}>1</Text>
              <View style={styles.powerInfo}>
                <Text style={styles.textValue}>0.727 KW</Text>
                <Caption style={styles.volatgeValue}>223.68 V</Caption>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const { width } = Dimensions.get("screen");
const width_screen = width * 0.9;
console.log("here is the width", width_screen);
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

  Icon: {
    border: "2px solid white",
    borderRadius: 40,
    padding: 13,
    color: "white",
  },

  body: {
    flex: 4,
    width: "100%",
  },

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
