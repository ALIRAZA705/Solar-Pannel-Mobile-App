import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeScreen from "../screens/homeScreen";
import SolarEnergyScreen from "../screens/solarEnergyScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import ProductionScreen from "../screens/ProductionScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          top: -10,
        },
        // styles.shadow,
      ]}
    >
      <View
        style={{
          borderRadius: 35,
          width: 70,
          height: 70,
          backgroundColor: "#00B3F4",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default function tabs(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          height: 80,
          backgroundColor: "#122C78",
        },
        showIcon: false,
        // ...styles.shadow,
      }}
      tabBarOptions={{
        showIcon: "false",
        showLabel: false,
      }}
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
    >
      <Tab.Screen
        name="ProductionScreen"
        component={ProductionScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 4,
              }}
            >
              <MaterialCommunityIcons
                name="solar-power"
                size={30}
                color={focused ? "white" : "grey"}
              />
              <Text style={{ color: "white", paddingTop: 5 }}>Production</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="EnergyScreen"
        component={SolarEnergyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <SimpleLineIcons
                name="energy"
                size={30}
                color={focused ? "white" : "grey"}
              />
              <Text style={{ color: "white", paddingTop: 5 }}>Energy</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={homeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 5,
              }}
            >
              <Icon
                name="home-outline"
                size={40}
                color={focused ? "white" : "grey"}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="MoneyScreen"
        component={homeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <FontAwesome5
                name="coins"
                size={30}
                color={focused ? "white" : "grey"}
              />
              <Text style={{ color: "white", paddingTop: 5 }}>Money</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={homeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Fontisto
                name="nav-icon-grid-a"
                size={25}
                color={focused ? "white" : "grey"}
              />
              <Text style={{ color: "white", paddingTop: 10 }}>Menu</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  selectedIcon: {
    color: "white",
  },
  notselectedIcon: {
    color: "grey",
  },
});
