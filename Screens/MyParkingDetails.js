import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import { globalStyles } from "../Styles/Global";

export default function MyParkingDetails({ navigation }) {
  const { item } = navigation.state.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/pSpot.png")}
        style={styles.bg}
      >
        <Text style={styles.bgText}>{item.address}</Text>
        <Text style={styles.bgText2}>
          {item.city}, {item.zip}
        </Text>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.boldText}>{item.pType}</Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Start: </Text>
          {item.startTime}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Slut: </Text>
          {item.endTime}
        </Text>
        <Text style={styles.boldText}>Registreret køretøj: </Text>
        <Text style={styles.text}>
          {item.car.nickname} - {item.car.plate}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Slut: </Text>
          {item.price}
        </Text>

        {/* SE PÅ KORT? */}
        {/* ANNULLER? */}

        <Button title="Tilbage" onPress={pressHandler} style={styles.btn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 250,
  },
  bgText: {
    position: "absolute",
    bottom: 35,
    left: 10,
    fontSize: 20,
    letterSpacing: 1,
    fontFamily: "lato-black",
    color: "white",
  },
  bgText2: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 20,
    letterSpacing: 1,
    fontFamily: "lato-black",
    color: "white",
  },
  content: {
    marginHorizontal: 15,
  },
  text: {
    fontFamily: "lato-regular",
    fontSize: 16,
    marginBottom: 5,
  },
  boldText: {
    fontFamily: "lato-black",
    marginTop: 8,
    fontSize: 16,
  },
  btn: {},
});
