import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Home from "./components/home/";

import Images from "./components/images/";
import Appointment from "./components/appointment/";
import UnitDetail from "./components/unitdetail/";
import Amenities from "./components/amenities/";
import Payment from "./components/payment/";
import VideoPlayer from "./components/video";
import MapViewer from "./components/map";
import About from "./components/about";
import Hotel from "./components/hotel";
import University from "./components/university";
import Playland from "./components/playland";
import Medical from "./components/medical";
import SideBar from "./components/sidebar";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },

    Images: { screen: Images },
    Appointment: { screen: Appointment },
    UnitDetail: { screen: UnitDetail },
    Amenities: { screen: Amenities },
    Payment: { screen: Payment },
    Map: { screen: MapViewer },
    Video: { screen: VideoPlayer },
    About: { screen: About },
    Medical: { screen: Medical },
    Hotel: { screen: Hotel },
    University: { screen: University },
    Playland: { screen: Playland }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
