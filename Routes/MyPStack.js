import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import MyParkings from "../Screens/MyParkings";
import MyParkingDetails from "../Screens/MyParkingDetails";

import Header from "../Shared/Header";

const screens = {
  MyParkings: {
    screen: MyParkings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Mine Parkeringer" nav={true} />
        ),
      };
    },
  },

  MyParkingDetails: {
    screen: MyParkingDetails,
  },
};

const MyPStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "black",
    headerStyle: {
      height: 90,
      backgroundColor: "#eee",
      // borderWidth: 2,
      // borderColor: "blue",
    },
  },
});

export default MyPStack;
