import React from "react";
import { View, Text, Button } from "react-native";

export default function Register({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View>
      <Text>Register</Text>
      <Button title="Register" onPress={handlePress}></Button>
    </View>
  );
}
