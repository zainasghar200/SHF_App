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
const image1 = require("../../../assets/playland1.jpg");
const image2 = require("../../../assets/playland2.jpg");
const image3 = require("../../../assets/playland3.jpg");
const image4 = require("../../../assets/playland4.jpg");

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

class Playland extends Component {
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
        },
        {
          url: image4
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
                    name="football"
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
                    Chukki Playland
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
                  Located at the heart of Shalimar Hill Farms, Chukki Playland,
                  shall be the very first state-of-the-art amusement park,
                  in-line with the global standards. The Playland ascribes to an
                  international layout, offering indoor and outdoor recreational
                  activities to visitors of all age-groups and to the residents
                  of Shalimar Hill Farms on membership basis. 360° Degree Loop
                  Roller Coaster, Alpine slides, Chairlifts, Dancing Fountains,
                  7D, 9D and 12D Virtual Cinemas, Happy Octopus, Big Pendulum,
                  Rotation 360°, Speed Windmill, Human Gyroscopes, Energy Storm
                  Ride, Crazy Bus Ride, Flying Car and Flying Chair, Mountain
                  Coasters, Ride Bike 360°. These above mentioned and many
                  others, are among the major attractions of the entertainment
                  facility. Designed and fabricated on 200 Kanals, assembled
                  under qualified and world-renowned amusement industry
                  engineers & professionals, we have ensured the highest quality
                  rigging and safety regulations. ‘Chukki Playland’ shall become
                  the identity of Shalimar Hill Farms world-wide, and shall
                  pronounce Kallar Kahar as the First Entertainment City of
                  Pakistan.
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

export default Playland;
