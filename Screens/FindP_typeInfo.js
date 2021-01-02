import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { globalStyles } from "../Styles/Global";

export default function FindP_typeInfo() {
  return (
    <View>
      <Text style={globalStyles.desc}>Hvad er parkeringstyper?</Text>

      <View style={styles.container}>
        <Text style={styles.heading}>Timeparkering</Text>
        <Text style={styles.text}>
          Det her er en beskrivelse af hvad timeparkering er, den skal være lidt
          længere
        </Text>

        <Text style={styles.heading}>Månedsparkering</Text>
        <Text style={styles.text}>
          Det her er en beskrivelse af hvad månedsparkering er. Det er parkering
          for en måned ad gangen
        </Text>

        <Text style={styles.heading}>Eventparkering</Text>
        <Text style={styles.text}>
          Det her er en beskrivelse af hvad eventparkering er. Der var en gang
          en mand som gerne ville vide hvad eventparkering er
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 50,
  },
  heading: {
    fontSize: 22,
    fontFamily: "lato-black",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: "lato-regular",
    marginBottom: 25,
  },
});
