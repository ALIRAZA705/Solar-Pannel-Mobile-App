import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Card } from "react-native-paper";

import { Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Duration from "./../Duration";

import Header from "../navigation/Header";

import Progress from "./ProgressBar";
import DaysGridDuration from "../DurationTabScreen/GridDuration/DaysDuration";
import YearsGridDuration from "../DurationTabScreen/GridDuration/YearsDuration";
import WeeksProduction from "./Production/Solar/WeeksProduction";
export default function ProductionScreen(props) {
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
          <ScrollView>
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
            </View>

            <ScrollView style={styles.ProgressContainer}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                  borderRadius: 30,
                  marginHorizontal: 20,
                }}
              >
                <DaysGridDuration
                  backgroundColor="yellow"
                  Icon="Solar"
                  marginVertical={0}
                />
                <DaysGridDuration
                  backgroundColor="#60D3FF"
                  Icon="Grid"
                  marginVertical={10}
                />
                <DaysGridDuration
                  backgroundColor="#FF7CC3"
                  Icon="Battery"
                  marginVertical={0}
                />
              </View>
            </ScrollView>
          </ScrollView>
        ) : selectedDuration == "YEARS" ? (
          <YearsGridDuration />
        ) : selectedDuration == "WEEKS" ? (
          <WeeksProduction />
        ) : null}
        {/* <View
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
        </View> */}
      </View>
      {/* <View style={styles.footer}>
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
      </View> */}
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
    // border: "2px solid white",
    // borderRadius: 40,
    // padding: 13,
    color: "yellow",
    margin: 10,
  },
  notSelectedIcon: {
    border: "2px solid white",
    borderRadius: 40,
    padding: 13,
    color: "grey",
  },
  body: {
    flex: 5,
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
  ProgressContainer: {
    flex: 1,
    // backgroundColor: "red",
    // border: "1px solid grey",
    // borderRadius: 30,
    margin: 10,
  },
});
