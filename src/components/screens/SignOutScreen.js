import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Gradient from "react-native-css-gradient";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";

const initailData = {
  email: "",
  password: "",
  confirmPassword: "",
  secureTextEntry: true,
  confirm_secureTextEntry: true,
  check_textInputChange: false,
};
export default function signOutScreen(props) {
  const [data, setData] = React.useState(initailData);
  const textInputChange = (event) => {
    if (event.target.value.length != 0) {
      setData({
        ...data,
        email: event.target.value,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: event.target.value,
        check_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = (event) => {
    setData({
      ...data,
      password: event.target.value,
    });
  };
  const handleConfirmPasswordChange = (event) => {
    setData({
      ...data,
      confirmPassword: event.target.value,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.textHeader}>Register Now!</Text>
      </View>
      <Animatable.View style={styles.Footer} animation="fadeInUpBig">
        <Text style={styles.textFooter}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20}
            style={{ marginTop: 10 }}
          />
          <TextInput
            placeholder="Enter Email"
            style={styles.inputFooter}
            onChange={(event) => textInputChange(event)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather
                name="check-circle"
                color="green"
                size={20}
                style={{ marginTop: 10 }}
              />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.textFooter, { marginTop: 20 }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05375a"
            size={20}
            style={{ marginTop: 10 }}
          />
          <TextInput
            placeholder="Enter Password"
            style={styles.inputFooter}
            secureTextEntry={data.secureTextEntry}
            onChange={(event) => handlePasswordChange(event)}
          />
          <TouchableOpacity onPress={() => updateSecureTextEntry()}>
            <Feather
              name={data.secureTextEntry ? "eye-off" : "eye"}
              color="grey"
              size={20}
              style={{ marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.textFooter, { marginTop: 20 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05375a"
            size={20}
            style={{ marginTop: 10 }}
          />
          <TextInput
            placeholder="Confirm Your Password"
            style={styles.inputFooter}
            secureTextEntry={data.confirm_secureTextEntry}
            onChange={(event) => handleConfirmPasswordChange(event)}
          />
          <TouchableOpacity onPress={() => updateConfirmSecureTextEntry()}>
            <Feather
              name={data.confirm_secureTextEntry ? "eye-off" : "eye"}
              color="grey"
              size={20}
              style={{ marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signInButton}>
          <Gradient
            gradient={gradient}
            style={{
              width: "auto",
              height: "auto",
              padding: 13,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginRight: "10px",
                color: "white",
                fontSize: 15,
              }}
            >
              Sign Up
            </Text>
          </Gradient>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => props.navigation.navigate("signInScreen")}
          >
            <Text style={styles.textSignUp}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
const gradient = `linear-gradient(45deg, #08d4c4, #01ab9d)`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#009387",
  },
  Header: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  textHeader: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  Footer: {
    flex: 3,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  textFooter: {
    marginTop: 10,
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  inputFooter: {
    padding: 10,
    color: "#05375a",
    flex: 1,
    paddingHorizontal: 20,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  signInButton: {
    marginTop: 20,
  },
  signUpButton: {
    marginTop: 20,
    borderRadius: 30,
    border: "1px solid green",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textSignUp: {
    color: "green",
    fontWeight: "bold",
    fontSize: 15,
  },
});
