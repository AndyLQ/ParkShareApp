import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../Styles/Global";

export default function MyParkings({ navigation }) {
  const [parkings, setParkings] = useState([
    {
      key: "1",
      address: "Søgade 21",
      city: "Aarhus C",
      zip: "8000",
      pType: "Event parkering",
      startTime: "3. Januar 2021 - 08:00",
      endTime: "3. Januar 2021 - 20:00",
      price: "80 DKK",
      car: { key: "1", nickname: "Car 1", plate: "XY 30 348", size: "Lille" },
      active: true,
    },
    {
      key: "2",
      address: "Rønnevangen 34",
      city: "Sabro",
      zip: "8471",
      pType: "Time parkering",
      startTime: "6. Januar 2021 - 12:00",
      endTime: "7. Januar 2021 - 08:00",
      price: "50 DKK",
      car: { key: "2", nickname: "Car 2", plate: "FX 39 239", size: "Normal" },
      active: true,
    },
    {
      key: "3",
      address: "Egevænget 7",
      city: "Lunderskov",
      zip: "6640",
      pType: "Time parkering",
      startTime: "21. Marts 2021 - 08:00",
      endTime: "29. Marts 2021 - 19:00",
      price: "340 DKK",
      car: { key: "3", nickname: "Car 3", plate: "AB 99 293", size: "Normal" },
      active: true,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.desc}>
        Her kan du se hvilke p-pladser du har lejet
      </Text>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons
          name="history"
          size={28}
          color="white"
          style={styles.historyIcon}
        ></MaterialIcons>
        <Text style={styles.buttonText}> Se historik</Text>
      </TouchableOpacity>

      <FlatList
        data={parkings}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MyParkingDetails", { item })}
            style={styles.listContent}
          >
            <Text style={styles.itemHeading}>
              {item.address}, {item.city}
            </Text>
            <Text style={styles.itemText}>{item.pType}</Text>
            <Text style={styles.itemText}>{item.startTime}</Text>
            <Text style={styles.itemText}>{item.endTime}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.newPButton}>
        <MaterialIcons name="add" size={40} color="white"></MaterialIcons>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 20,
  },
  desc: {
    fontFamily: "lato-bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: "86%",
    marginHorizontal: "7%",
    textAlign: "center",
    backgroundColor: "#0063DB",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontFamily: "lato-black",
  },
  list: {
    marginTop: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  listContent: {
    paddingHorizontal: 20,
    // borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  itemHeading: {
    fontSize: 18,
    fontFamily: "lato-black",
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
    color: "#898989",
    fontFamily: "lato-bold",
    marginBottom: 4,
  },
  historyIcon: {
    // position: "absolute",
    // left: 15,
    marginRight: 5,
  },
  newPButton: {
    position: "absolute",
    right: 15,
    bottom: 15,
    backgroundColor: "#0063db",
    padding: 15,
    borderRadius: 35,
  },
});
