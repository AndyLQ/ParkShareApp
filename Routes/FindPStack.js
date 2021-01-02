import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../Shared/Header";

import FindParking from "../Screens/FindParking";
import ChooseType from "../Screens/FindP_type";
import typeInfo from "../Screens/FindP_typeInfo";

const screens = {
  FindParking: {
    screen: FindParking,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Find Parkering" nav={true} />
        ),
      };
    },
  },

  ChooseType: {
    screen: ChooseType,
    navigationOptions: {
      title: "Vælg type",
    },
  },
  typeInfo: {
    screen: typeInfo,
    navigationOptions: {
      title: "Parkeringstyper",
    },
  },
};

const FindPStack = createStackNavigator(screens, {
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

export default FindPStack;
