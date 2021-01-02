import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import CustomDrawerContentComponent from "./CustomDrawerContentComponent";

import Dashboard from "./DashboardStack";
import StartStack from "./StartStack";
import VehiclesStack from "./VehiclesStack";
import MyPStack from "./MyPStack";
import FindPStack from "./FindPStack";

const rootDrawerNavigator = createDrawerNavigator(
  {
    Forside: {
      screen: Dashboard,
    },
    MyVehicles: {
      screen: VehiclesStack,
    },
    MyParkings: {
      screen: MyPStack,
    },
    FindParking: {
      screen: FindPStack,
    },
    LogOut: {
      screen: StartStack,
    },
  },
  {
    // contentComponent: CustomDrawerContentComponent,
  }
);

export default createAppContainer(rootDrawerNavigator);
