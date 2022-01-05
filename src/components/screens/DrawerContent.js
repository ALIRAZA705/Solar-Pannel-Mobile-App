import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  Draweritem,
} from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Switch,
  TouchableRipple,
  Paragraph,
} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
export default function DrawerContent(props) {
  const [isDakTheme, setIsDakTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDakTheme(!isDakTheme);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfo}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={50}
              />

              <View style={{ marginLeft: 15 }}>
                <Title style={styles.Title}>ALI RAZA</Title>
                <Caption style={styles.Caption}>@aliraza30028</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.Section}>
                <Paragraph style={styles.Paragraph}>80</Paragraph>
                <Caption>Following</Caption>
              </View>
              <View style={styles.Section}>
                <Paragraph style={styles.Paragraph}>100</Paragraph>
                <Caption>Follower</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label={"Home"}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
            />
            <DrawerItem
              label={"Bookmarks"}
              onPress={() => {
                props.navigation.navigate("bookmark");
              }}
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
            />
            {/* <DrawerItem
              label={"Profile"}
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
              icon={({ color, size }) => (
                <Icon name="phone" color={color} size={size} />
              )}
            /> */}
            <DrawerItem
              label={"Settings"}
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
            />
            <DrawerItem
              label={"Support"}
              icon={({ color, size }) => (
                <Icon name="shirt-outline" color={color} size={size} />
              )}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.Preferences}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDakTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomSection}>
        <DrawerItem
          label={"Sign Out"}
          icon={({ color, size }) => (
            <Icon name="exit-outline" color={color} size={size} />
          )}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,

    alignItems: "center",
  },
  Preferences: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  Section: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  Paragraph: {
    marginRight: 3,
  },
  userInfo: { paddingLeft: 20 },
  drawerSection: {
    marginTop: 20,
  },
  bottomSection: {
    marginBottom: "20px",
    borderTopColor: "#f4f4f4",
    borderTopWidth: 2,
    // backgroundColor: "black",
  },
  Title: {
    marginTop: 3,
    fontWeight: "bold",
    fontSize: 16,
  },
  Caption: {
    fontSize: 14,
    lineHeight: 14,
  },
});
