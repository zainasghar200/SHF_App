import React, { Component } from "react";
import SvgMap from "../SVGComponent/svg";
import Partial from "../SVGComponent/partial";
import SvgComponent from "../SVGComponent/Logo";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

import {
  Container,
  Header,
  Title,
  Button,
  Body,
  Icon,
  Footer,
  FooterTab,
  View,
  Text
} from "native-base";
//import SvgPanZoom, { SvgPanZoomElement } from "react-native-svg-pan-zoom";

// import MapboxGL from "@react-native-mapbox-gl/maps";
import variable from "../../theme/variables/platform";
//import SvgUri from "expo-svg-uri";
//import WebViewLeaflet from "react-native-webview-leaflet";
import {
  ImageBackground,
  TouchableHighlight,
  Image,
  Linking
} from "react-native";
const backArrow = require("../../../assets/backArrow.png");
//import Logo from "../../../assets/logo.svg";
//import pak from "../../../assets/pak.svg";

import styles from "./styles";
const screenBg = require("../../../assets/launchscreen-bg.png");

class MapViewer extends Component {
  onShouldDrag = (e, gesture) => {
    const { dx } = gesture;
    return Math.abs(dx) > 2;
  };

  onLoad = event => {
    // log a message showing the map has been loaded
    //console.log("onLoad received : ", event);
    // optionally set state
  };
  handleMapNavigation = plotId => {
    const { navigate } = this.props.navigation;
    navigate("UnitDetail", {
      id: plotId
    });
  };
  render() {
    return (
      <Container>
        <ImageBackground source={screenBg} style={styles.imageContainer}>
          <Header
            transparent
            androidStatusBarColor="#000000"
            iosBarStyle="light-content"
          >
            <Body>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "baseline"
                }}
              >
                <TouchableHighlight
                  onPress={() => this.props.navigation.goBack()}
                >
                  <View
                    style={{
                      flex: 0,
                      alignSelf: "flex-start",
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      style={{ height: 30, width: 20 }}
                      source={backArrow}
                    />
                  </View>
                </TouchableHighlight>

                <View
                  style={{
                    flex: 0,
                    alignSelf: "center",
                    flexDirection: "row"
                  }}
                >
                  <Icon
                    name="map"
                    style={{
                      color: variable.SHF_TextColor,
                      marginRight: 6
                    }}
                  />
                  <Title
                    style={{
                      color: variable.SHF_TextColor,
                      fontSize: 23
                    }}
                  >
                    MAP
                  </Title>
                </View>
                <View
                  style={{
                    flex: 0,
                    height: 10,
                    width: 10,
                    alignSelf: "flex-end"
                  }}
                />
              </View>
            </Body>
          </Header>

          <View style={styles.shfItemGrid}>
            {/* <ReactNativeZoomableView maxZoom={12}> */}
            {/* <SvgMap
              width="100%"
              height="100%"
              onNevigate={this.handleMapNavigation}
            /> */}
            {/* </ReactNativeZoomableView> */}
            <ReactNativeZoomableView maxZoom={12}>
              <SvgMap
                width="100%"
                height="100%"
                onNevigate={this.handleMapNavigation}
              />
            </ReactNativeZoomableView>
          </View>

          <Footer>
            <FooterTab>
              <Button
                onPress={() =>
                  Linking.openURL(
                    "https://www.facebook.com/pg/ShalimarHillFarms/"
                  )}
              >
                <Icon
                  name="logo-facebook"
                  style={{ color: variable.SHF_TextColor }}
                />
                <Text style={styles.shffooterText}>FACEBOOK</Text>
              </Button>
              <Button
                onPress={() =>
                  Linking.openURL("https://www.instagram.com/shfkallarkahar/")}
              >
                <Icon
                  name="logo-instagram"
                  style={{ color: variable.SHF_TextColor }}
                />
                <Text style={styles.shffooterText}>INSTAGRAM</Text>
              </Button>
              <Button
                onPress={() =>
                  Linking.openURL("https://twitter.com/shfkallarkahar")}
              >
                <Icon
                  name="logo-twitter"
                  style={{ color: variable.SHF_TextColor }}
                />
                <Text style={styles.shffooterText}>TWITER</Text>
              </Button>
              <Button
                onPress={() =>
                  Linking.openURL(
                    "https://www.youtube.com/channel/UCPuVchLSvqNtktB9ENXk13w?view_as=subscriber"
                  )}
              >
                <Icon
                  name="logo-youtube"
                  style={{ color: variable.SHF_TextColor }}
                />
                <Text style={styles.shffooterText}>YOUTUBE</Text>
              </Button>
              <Button
                onPress={() =>
                  Linking.openURL("http://www.shf-kallarkahar.com/")}
              >
                <Icon
                  name="logo-chrome"
                  style={{ color: variable.SHF_TextColor }}
                />
                <Text style={styles.shffooterText}>WEBSITE</Text>
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export default MapViewer;

{
  /* <SvgPanZoom maxScale={20}>
        <SvgComponent width="100%" height="100%" />
      </SvgPanZoom> */
}
