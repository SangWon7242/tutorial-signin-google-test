import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
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
        <TouchableOpacity
          style={{
            flex: 0.1,
            flexDirection: "row",
            backgroundColor: "rgba(6, 188, 238, 1)",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 30,
            width: "80%",
            gap: 10,
          }}
        >
          <AntDesign name="google" size={30} color="white" />
          <Text style={styles.signBtn}>Sign in with Google</Text>
        </TouchableOpacity>
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
