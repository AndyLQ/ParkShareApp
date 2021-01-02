import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title, nav }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  const [menu, setmenu] = useState(nav);

  const showMenu = menu ? (
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialIcons
        name="menu"
        size={36}
        onPress={openMenu}
        style={styles.icon}
      />
    </TouchableOpacity>
  ) : (
    <View></View>
  );

  return (
    <View style={styles.header}>
      {showMenu}
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: "100%",

    // borderWidth: 2,
    // borderColor: "red",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "lato-black",
    fontSize: 28,
    color: "black",
    letterSpacing: 0,
  },
  iconContainer: {
    position: "absolute",
    backgroundColor: "#0063DB",
    borderRadius: 6,
    right: 16,
    borderColor: "blue",
  },
  icon: {
    color: "white",
    padding: 4,
    fontWeight: "bold",
  },
  headerTitle: {
    flexDirection: "row",
  },
  image: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
});
