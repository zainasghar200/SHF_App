import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import { Container } from "native-base";

const splashscreen = require("../../../assets/splashscreen.png");

export default class SplashPage extends Component {
  render() {
    // eslint-disable-line class-methods-use-this
    const { width, height } = Dimensions.get("window");

    return (
      <Container>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        {/* <Image
          source={splashscreen}
          style={{ flex: 1, height: null, width: null, resizeMode: "stretch" }}
        /> */}
        <ImageBackground
          source={splashscreen}
          imageStyle={{ resizeMode: "stretch" }}
          style={{ flex: 1, width: null, height: null }}
        />
      </Container>
    );
  }
}
