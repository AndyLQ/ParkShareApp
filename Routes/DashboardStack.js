import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Dashboard from "../Screens/Dashboard";

import Header from "../Shared/Header";

const screens = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Forside" nav={true} />
        ),
      };
    },
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
