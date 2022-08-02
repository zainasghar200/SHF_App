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
  View
} from "native-base";

import variable from "../../theme/variables/platform";

import {
  ImageBackground,
  TouchableHighlight,
  Image,
  Linking
} from "react-native";
const backArrow = require("../../../assets/backArrow.png");
import styles from "./styles";
const screenBg = require("../../../assets/launchscreen-bg.png");

class About extends Component {
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
                    name="cash"
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
                    PAYMENT
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

          <View style={{ flex: 1, margin: 5 }}>
            <Text
              style={{ color: variable.shfTextColor, textAlign: "justify" }}
            >
              1) The ownership of the acquired land in Kallar Kahar is as the
              sole proprietor. Such a form of ownership is difficult to have in
              other hilly areas of Pakistan.
            </Text>
            <Text
              style={{ color: variable.shfTextColor, textAlign: "justify" }}
            >
              2) The roads are planned and there is ample space for parking.
              Computerized project land record maintained in the 'Punjab Land
              Record Authority'.
            </Text>
            <Text
              style={{ color: variable.shfTextColor, textAlign: "justify" }}
            >
              3) The quality of water is of 'mineral water' grade, in this
              project. Weather is moderate with a continuous breeze.
            </Text>
            <Text
              style={{ color: variable.shfTextColor, textAlign: "justify" }}
            >
              4) The soil is supportive for construction and favorable for
              plantation of fruit trees and organic vegetables.
            </Text>
            <Text
              style={{ color: variable.shfTextColor, textAlign: "justify" }}
            >
              5) This is a blessed area, where saints and walis have worshipped
              on the hills and in the caves. Ground reality evident by completed
              'official formal boundary identification', 'digital topography'
              and 'master town planning'.
            </Text>
            <Text
              style={{ color: variable.shfTextColor, textAlign: "justify" }}
            >
              6) A picnic point going on to become an entertainment city,
              leading to rapid appreciation of the land prices. Thousands of
              cars pass by the Kallar Kahar M2 Interchange, every hour.
            </Text>
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

export default About;
