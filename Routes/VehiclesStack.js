import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../Shared/Header";

import MyVehicles from "../Screens/MyVehicles";

const screens = {
  MyVehicles: {
    screen: MyVehicles,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Mine Køretøjer" nav={true} />
        ),
      };
    },
  },

  //   ReviewDetails: {
  //     screen: ReviewDetails,
  //     navigationOptions: {
  //       title: "Review details",
  //     },
  //   },
};

const VehiclesStack = createStackNavigator(screens, {
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

export default VehiclesStack;
