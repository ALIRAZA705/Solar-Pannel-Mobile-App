import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text>Details screen</Text>
      <Button
        title="Go to Home screen "
        onPress={() => props.navigation.navigate("Home")}
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Profile;
