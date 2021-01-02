import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../Shared/Header";

import StartPage from "../Screens/StartPage";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Dashboard from "../Screens/Dashboard";

const screens = {
  StartPage: {
    screen: StartPage,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="ParkShare" nav={false} />
        ),
      };
    },
  },

  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
    },
  },

  Register: {
    screen: Register,
    navigationOptions: {
      title: "Registrer",
    },
  },

  Dashboard: {
    screen: Dashboard,
  },
};

const StartStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "black",
    headerStyle: {
      height: 90,
      backgroundColor: "#eee",

      //   borderWidth: 2,
      //   borderColor: "blue",
    },
  },
});

export default StartStack;
