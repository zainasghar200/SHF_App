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

import axios from "axios";
import * as ConstClass from "../../common/Constants";
import variable from "../../theme/variables/platform";
import { FlatGrid } from "react-native-super-grid";
import Spinner from "react-native-loading-spinner-overlay";
import {
  ImageBackground,
  TouchableHighlight,
  Image,
  Linking
} from "react-native";
import styles from "./styles";
const screenBg = require("../../../assets/launchscreen-bg.png");
const tempImg = require("../../../assets/drawer-cover.png");
const backArrow = require("../../../assets/backArrow.png");

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: []
    };
  }
  componentDidMount() {
    this.setState({
      spinner: true
    });
    axios
      .get(ConstClass.SHF_BACK_END + "attachments")
      .then(res => {
        this.setState({
          spinner: false
        });
        this.setState({
          thumbnail: res.data.data.attachments
        });
        //alert(this.state.premittedUse);
      })
      .catch(function(error) {
        this.setState({
          spinner: false
        });
        //alert(error);
        Toast.show({
          text: "Check your Internet Connection!",
          buttonText: "Okay",
          type: "warning",
          duration: 4000
        });
      });
  }

  render() {
    const items = [
      { name: "IMAGES", sub: "", icon: "image", route: "Images" },
      { name: "VIDEO", sub: "", icon: "film", route: "Images" },
      { name: "AMENITIES", sub: "FACILITIES", icon: "film", route: "Images" },
      { name: "APPOINTMENT", sub: "", icon: "envelope", route: "Images" },
      { name: "IMAGES", sub: "", icon: "image", route: "Images" },
      { name: "VIDEO", sub: "", icon: "film", route: "Images" },
      { name: "AMENITIES", sub: "FACILITIES", icon: "film", route: "Images" },
      { name: "APPOINTMENT", sub: "", icon: "envelope", route: "Images" },
      {
        name: "PAYMENT",
        sub: "SCHEDULE PLANS",
        icon: "envelope",
        route: "Images"
      },
      { name: "UNITS", sub: "LAYOUT MAP", icon: "envelope", route: "Images" }
    ];
    return (
      <Container style={styles.container}>
        <ImageBackground source={screenBg} style={styles.imageContainer}>
          <Spinner
            visible={this.state.spinner}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
            overlayColor={"#00000025"}
            size={"large"}
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
                    name="image"
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
                    IMAGES
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

          <FlatGrid
            itemDimension={130}
            items={this.state.thumbnail}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) =>
              <View style={[styles.itemContainer]}>
                <Image style={styles.gridImage} source={{ uri: item.path }} />
              </View>}
          />
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

export default Images;
