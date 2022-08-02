import React, { Component } from "react";
import {
  ImageBackground,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Linking
} from "react-native";
import { WebBrowser } from "expo";
import { Container, Icon, Footer, FooterTab, Button } from "native-base";
import { FlatGrid } from "react-native-super-grid";
import variable from "../../theme/variables/platform";

import styles from "./styles";
const sidebar = require("../../../assets/sidebar.png");

const screenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
  render() {
    const items = [
      { name: "IMAGES", sub: "", icon: "image", route: "Images" },
      { name: "VIDEO", sub: "", icon: "film", route: "Video" },
      {
        name: "AMENITIES",
        sub: "FACILITIES",
        icon: "analytics",
        route: "Amenities"
      },
      { name: "APPOINTMENT", sub: "", icon: "mail", route: "Appointment" },
      {
        name: "PAYMENT",
        sub: "SCHEDULE PLANS",
        icon: "cash",
        route: "Payment"
      },
      {
        name: "UNITS",
        sub: "LAYOUT MAP",
        icon: "map",
        route: "Map"
      }
      // {
      //   name: "UNITS",
      //   sub: "LAYOUT MAP",
      //   icon: "map",
      //   route: "UnitDetail"
      // }
    ];

    return (
      <Container>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <ImageBackground
          source={screenBg}
          imageStyle={{ resizeMode: "stretch" }}
          style={styles.imageContainer}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1.6, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <TouchableHighlight
                  onPress={() => this.props.navigation.openDrawer()}
                >
                  <Image
                    resizeMode="contain"
                    style={{ height: 50, width: 50 }}
                    source={sidebar}
                  />
                </TouchableHighlight>
              </View>
              <View
                style={{
                  flex: 3.5,
                  alignItems: "flex-end",
                  justifyContent: "space-around",
                  flexDirection: "row"
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.logo}
                  source={launchscreenLogo}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              />
            </View>

            {/* Navigation Grid */}
            <View style={{ flex: 4.2 }}>
              <FlatGrid
                itemDimension={130}
                items={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                // spacing={20}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(item.route)}
                  >
                    <View style={[styles.itemContainer]}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.sub}</Text>
                      </View>
                      <Icon name={item.icon} style={styles.itemIcon} />
                      {/* <FontAwesomeIcon icon={["fab", "apple"]} /> */}
                      <View style={{ flex: 1 }} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>

            {/* Footer */}
            <View style={{ flex: 0.5 }}>
              <Footer>
                <FooterTab>
                  <Button
                    onPress={() =>
                      Linking.openURL(
                        "https://www.facebook.com/pg/ShalimarHillFarms/"
                      )
                    }
                  >
                    <Icon
                      name="logo-facebook"
                      style={{ color: variable.SHF_TextColor }}
                    />
                    <Text style={styles.shffooterText}>FACEBOOK</Text>
                  </Button>
                  <Button
                    onPress={() =>
                      Linking.openURL(
                        "https://www.instagram.com/shfkallarkahar/"
                      )
                    }
                  >
                    <Icon
                      name="logo-instagram"
                      style={{ color: variable.SHF_TextColor }}
                    />
                    <Text style={styles.shffooterText}>INSTAGRAM</Text>
                  </Button>
                  <Button
                    onPress={() =>
                      Linking.openURL("https://twitter.com/shfkallarkahar")
                    }
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
                      )
                    }
                  >
                    <Icon
                      name="logo-youtube"
                      style={{ color: variable.SHF_TextColor }}
                    />
                    <Text style={styles.shffooterText}>YOUTUBE</Text>
                  </Button>
                  <Button
                    onPress={() =>
                      Linking.openURL("http://www.shf-kallarkahar.com/")
                    }
                  >
                    <Icon
                      name="logo-chrome"
                      style={{ color: variable.SHF_TextColor }}
                    />
                    <Text style={styles.shffooterText}>WEBSITE</Text>
                  </Button>
                </FooterTab>
              </Footer>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
