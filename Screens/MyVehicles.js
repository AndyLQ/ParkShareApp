import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Modal,
  Keyboard,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../Styles/Global";

import AddCarForm from "./AddCarForm";

export default function MyVehicles() {
  const [modalOpen, setModalOpen] = useState(false);
  const [vehicles, setVehicles] = useState([
    { key: "1", nickname: "Min Bil", plate: "XY 30 348", size: "Lille" },
    { key: "2", nickname: "Mors Dyt", plate: "FX 39 239", size: "Normal" },
    { key: "3", nickname: "Henriks bil", plate: "AB 99 293", size: "Normal" },
    { key: "4", nickname: "Fars Mercedes", plate: "XE 58 419", size: "Lille" },
  ]);

  const addCar = (car) => {
    car.key = Math.random().toString();
    car.size = "Normal";
    setVehicles((currentVehicles) => {
      return [car, ...currentVehicles];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modal}>
            <MaterialIcons
              name="chevron-left"
              size={50}
              style={styles.closeModal}
              onPress={() => setModalOpen(false)}
            ></MaterialIcons>
            <AddCarForm addCar={addCar} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.descContainer}>
        <Text style={styles.pageDesc}>
          Her kan du se dine registreret køretøjer
        </Text>
        <Text style={styles.pageDesc}>
          Du har {vehicles.length} registreret køretøjer
        </Text>
      </View>

      <FlatList
        data={vehicles}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.listElement}>
            <Text style={styles.listHeading}>{item.nickname}</Text>
            <Text style={styles.listText}>
              {item.plate} - {item.size}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => setModalOpen(true)}
        style={styles.addButton}
      >
        <MaterialIcons
          name="add-box"
          size={30}
          color="white"
          style={styles.modalToggle}
        ></MaterialIcons>
        <Text style={styles.buttonText}> Registrer nyt køretøj</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageDesc: {
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "lato-bold",
    fontSize: 16,
  },
  descContainer: {
    paddingVertical: 10,
    borderBottomColor: "#898989",
    borderBottomWidth: 2,
  },
  list: {},
  listElement: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: "#898989",
    borderBottomWidth: 2,
  },
  listHeading: {
    fontSize: 20,
    fontFamily: "lato-black",
    marginBottom: 5,
  },
  listText: {
    fontSize: 16,
    color: "#898989",
  },
  addButton: {
    position: "absolute",
    width: "92%",
    height: 50,
    bottom: 15,
    textAlign: "center",
    backgroundColor: "#0063Db",
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
  modalToggle: {
    position: "absolute",
    left: 15,
  },

  modal: {
    marginTop: 30,
    flex: 1,
    marginHorizontal: 20,
  },
  closeModal: {
    position: "absolute",
    marginLeft: -20,
  },
});
