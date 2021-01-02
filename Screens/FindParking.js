import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Card from "../Shared/Card";

export default function FindParking({ navigation }) {
  const [vehicles, setVehicles] = useState([
    { key: "1", nickname: "Min Bil", plate: "XY 30 348", size: "Lille" },
    { key: "2", nickname: "Mors Dyt", plate: "FX 39 239", size: "Normal" },
    { key: "3", nickname: "Henriks bil", plate: "AB 99 293", size: "Normal" },
    { key: "4", nickname: "Fars Mercedes", plate: "XE 58 419", size: "Lille" },
  ]);

  return (
    <View>
      <Text style={styles.desc}>
        Først skal du vælge hvilken bil du vil parkere med
      </Text>

      <FlatList
        data={vehicles}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ChooseType")}>
            <Card style={styles.listElement}>
              <Text style={styles.listHeading}>
                {item.nickname} - {item.plate}
              </Text>

              {item.size === "Lille" ? (
                <View style={styles.smallContainer}>
                  <Text style={styles.listTextSmall}> {item.size}</Text>
                </View>
              ) : (
                <View style={styles.normalContainer}>
                  <Text style={styles.listTextNormal}> {item.size}</Text>
                </View>
              )}
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontFamily: "lato-black",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  list: {},
  listHeading: {
    fontSize: 18,
    fontFamily: "lato-black",
    // borderColor: "red",
    // borderWidth: 2,
  },
  listText: {
    fontSize: 14,
    color: "#898989",
    textAlign: "right",
  },
  smallContainer: {
    backgroundColor: "#FF0084",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  listTextSmall: {
    fontSize: 14,
    color: "white",
    fontFamily: "lato-black",
  },
  normalContainer: {
    backgroundColor: "#0063db",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },
  listTextNormal: {
    fontSize: 14,
    color: "white",
    fontFamily: "lato-black",
  },
});
