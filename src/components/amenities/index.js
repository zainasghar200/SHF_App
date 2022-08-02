import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
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
  TouchableOpacity,
  Image,
  Linking
} from "react-native";
const backArrow = require("../../../assets/backArrow.png");
import styles from "./styles";
const screenBg = require("../../../assets/launchscreen-bg.png");
const medical = require("../../../assets/medical.png");
const playland = require("../../../assets/playland.jpg");
const university = require("../../../assets/university.jpg");
const hotel = require("../../../assets/hotel.jpg");

class Amenities extends Component {
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
                    type="FontAwesome"
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
                    AMENITIES
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

          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.shfItemGrid}
                onPress={() => this.props.navigation.navigate("Medical")}
              >
                {/* <View style={styles.shfItemGrid}> */}

                <Text style={styles.itemName}>MEDICAL</Text>
                <Text style={styles.itemCode}>COLLEGE &</Text>
                <Text style={styles.itemCode}>HOSPITAL</Text>
                <ImageBackground
                  source={medical}
                  imageStyle={{ resizeMode: "stretch" }}
                  style={styles.imageContainer}
                />
                {/* </View> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shfItemGrid}
                onPress={() => this.props.navigation.navigate("Playland")}
              >
                <Text style={styles.itemName}>CHUKKY</Text>
                <Text style={styles.itemCode}>PLAYLAND</Text>
                <Text style={styles.itemCode} />

                <ImageBackground
                  source={playland}
                  imageStyle={{ resizeMode: "stretch" }}
                  style={styles.imageContainer}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.shfItemGrid}
                onPress={() => this.props.navigation.navigate("University")}
              >
                <Text style={styles.itemName}>INTERNATIONAL</Text>
                <Text style={styles.itemCode}>STANDARD</Text>
                <Text style={styles.itemCode}>UNIVERSITY</Text>

                <ImageBackground
                  source={university}
                  imageStyle={{ resizeMode: "stretch" }}
                  style={styles.imageContainer}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shfItemGrid}
                onPress={() => this.props.navigation.navigate("Hotel")}
              >
                <Text style={styles.itemName}>HOTEL &</Text>
                <Text style={styles.itemCode}>RESORT</Text>
                <Text style={styles.itemCode} />

                <ImageBackground
                  source={hotel}
                  imageStyle={{ resizeMode: "stretch" }}
                  style={styles.imageContainer}
                />
              </TouchableOpacity>
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

export default Amenities;
