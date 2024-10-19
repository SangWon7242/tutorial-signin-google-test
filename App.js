import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "280057957535-v9jmqi1r88q8l9fofh3qimp166v17jfl.apps.googleusercontent.com",
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Signing in");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available");
      } else {
        console.log("Some other error happened");
        console.log(error.message);
        console.log(error.code);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...styles.title, marginRight: 10 }}>Signin with</Text>
          <Text
            style={{ ...styles.googleText, color: "rgba(66, 133, 244, 1)" }}
          >
            G
          </Text>
          <Text style={{ ...styles.googleText, color: "rgba(234, 67, 53, 1)" }}>
            o
          </Text>
          <Text style={{ ...styles.googleText, color: "rgba(251, 188, 5, 1)" }}>
            o
          </Text>
          <Text
            style={{ ...styles.googleText, color: "rgba(66, 133, 244, 1)" }}
          >
            g
          </Text>
          <Text style={{ ...styles.googleText, color: "rgba(52, 168, 83, 1)" }}>
            l
          </Text>
          <Text style={{ ...styles.googleText, color: "rgba(234, 67, 53, 1)" }}>
            e
          </Text>
        </View>
      </View>
      <View style={{ flex: 1.5, alignItems: "center" }}>
        <GoogleSigninButton
          onPress={signIn}
          style={{
            flex: 0.1,
            width: "70%",
            paddingTop: 10,
            paddingBottom: 10,
            fontWeight: "bold",
          }}
          size={GoogleSigninButton.Size.Wide}
        />
        {/* <AntDesign name="google" size={30} color="white" />
          <Text style={styles.signBtn}>Sign in with Google</Text>
        </GoogleSigninButton> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },
  googleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  signBtn: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
