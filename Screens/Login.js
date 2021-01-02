import React from "react";
import { View, Text, Button } from "react-native";

import Dashboard from "../Screens/Dashboard";

export default function Login({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={handlePress}></Button>
    </View>
  );
}
