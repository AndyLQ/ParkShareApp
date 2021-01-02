import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../Styles/Global";
import { MaterialIcons } from "@expo/vector-icons";

export default function StartPage({ navigation }) {
  const handlePress = (nav) => {
    navigation.navigate(nav);
    // navigation.push("Login");
  };

  return (
    <View style={globalStyles.container}>
      <Text>Hi</Text>
      <Button title="Login" onPress={() => handlePress("Login")} />
      <Button title="Register" onPress={() => handlePress("Register")} />

      {/* Velkommen til */}
      {/* LOGO - ParkShare */}
      {/* Parkering nemt og bekvemt */}

      {/* 3 x Knap = Se P + Login + Registrer */}
    </View>
  );
}

const styles = StyleSheet.create({
  listElements: {
    fontSize: 18,
    fontFamily: "lato-bold",
    lineHeight: 50,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    // borderColor: "green",
    // borderWidth: 2,
  },
});
