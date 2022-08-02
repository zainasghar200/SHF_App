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
import Slideshow from "react-native-image-slider-show";
const image1 = require("../../../assets/medical1.jpg");
const image2 = require("../../../assets/medical2.jpg");
const image3 = require("../../../assets/medical3.jpg");
import {
  ImageBackground,
  TouchableHighlight,
  Image,
  Linking,
  ScrollView
} from "react-native";
const backArrow = require("../../../assets/backArrow.png");
import styles from "./styles";
const screenBg = require("../../../assets/launchscreen-bg.png");

class Medical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url: image1
        },
        {
          url: image2
        },
        {
          url: image3
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
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
                    name="medkit"
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
                    Medical College & Hospital
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
            <View style={{ flex: 1 }}>
              <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })}
              />
            </View>

            <View style={{ flex: 1.6 }}>
              <ScrollView>
                <Text
                  style={{ color: variable.shfTextColor, textAlign: "justify" }}
                >
                  We look forward to providing an opportunity to a domestic or
                  foreign, like-minded group of doctors, in investing and
                  accomplishing a hospital with an affiliated research center at
                  Shalimar Hill Farms. Geared with top-of-the-line equipment,
                  24/7 diagnostics, professional nursing staff and experienced
                  doctors, this hospital and research center shall be a
                  cutting-edge in providing quality care. The affiliated Medical
                  College and the School of Para-Medics at Shalimar Hill Farms,
                  shall train students for world class medical syllabus,
                  practices and procedures that are in-line with the global
                  medical merits. Hostel facility to be developed for students
                  who require it and hail from other areas to acquire skills, to
                  benefit and transform for a better life.
                </Text>
              </ScrollView>
            </View>
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

export default Medical;
