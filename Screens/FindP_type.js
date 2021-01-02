import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { globalStyles } from "../Styles/Global";

export default function FindP_type({ navigation }) {
  return (
    <View>
      <Text style={globalStyles.desc}>Hvilken type parkering ønsker du? </Text>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={3} style={styles.buttonBlue}>
          <Text style={styles.buttonText}>Timeparkering</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={3} style={styles.buttonBlue}>
          <Text style={styles.buttonText}>Månedsparkering</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={3} style={styles.buttonBlue}>
          <Text style={styles.buttonText}>Eventparkering</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("typeInfo")}
          style={styles.buttonPink}
        >
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 150,
  },
  buttonBlue: {
    width: "92%",
    height: 50,
    textAlign: "center",
    backgroundColor: "#0063Db",
    marginHorizontal: "4%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonPink: {
    width: "92%",
    height: 50,
    textAlign: "center",
    backgroundColor: "#FF0084",
    marginHorizontal: "4%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontFamily: "lato-black",
  },
});
