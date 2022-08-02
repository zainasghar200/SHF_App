import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Body,
  Icon,
  Text,
  Footer,
  FooterTab,
  View,
  Toast
} from "native-base";
//import { Video } from "expo";
import axios from "axios";
import * as ConstClass from "../../common/Constants";
import { WebView } from "react-native-webview";
import variable from "../../theme/variables/platform";
import Spinner from "react-native-loading-spinner-overlay";

import {
  ImageBackground,
  TouchableHighlight,
  Image,
  Linking
} from "react-native";
const backArrow = require("../../../assets/backArrow.png");
import styles from "./styles";
const screenBg = require("../../../assets/launchscreen-bg.png");

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbURL: "https://www.youtube.com/watch?v=yAoLSRbwxL8",
      spinner: false
    };
  }
  componentDidMount() {
    this.setState({
      spinner: true
    });

    axios
      .get(ConstClass.SHF_BACK_END + "video")
      .then(res => {
        this.setState({
          spinner: false,
          dbURL: res.data.data.video.url
        });
      })
      .catch(function(error) {
        this.setState({
          spinner: false
        });
        Toast.show({
          text: "Check your Internet Connection!",
          buttonText: "Okay",
          type: "warning",
          duration: 4000
        });
      });
  }
  render() {
    return (
      <Container>
        <ImageBackground source={screenBg} style={styles.imageContainer}>
          <Spinner
            visible={this.state.spinner}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
            overlayColor={"#00000025"}
            size={"large"}
            cancelable={true}
          />
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
                    name="videocam"
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
                    VIDEO
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
            {/* <WebView
              source={{ uri: "https://www.youtube.com/watch?v=yAoLSRbwxL8" }}
            /> */}
            <WebView source={{ uri: this.state.dbURL }} />
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

export default VideoPlayer;
