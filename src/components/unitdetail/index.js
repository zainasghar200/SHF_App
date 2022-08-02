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
  View,
  Toast
} from "native-base";
import axios from "axios";
import variable from "../../theme/variables/platform";
import * as ConstClass from "../../common/Constants";
import Spinner from "react-native-loading-spinner-overlay";
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

class UnitDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      plotNumber: "",
      price: "",
      bedRooms: null,
      area: "",
      areaUnit: "",
      unitType: null,
      premittedUse: null,
      buildingType: null,
      status: null,
      thumbnail: null,
      spinner: false
    };
  }
  componentDidMount() {
    const plotnumber = this.props.navigation.state.params.id;
    //alert(plotnumber);
    this.setState({
      spinner: true
    });
    axios
      .get(ConstClass.SHF_BACK_END + "plots/findByPlotNumber/" + plotnumber)
      .then(res => {
        this.setState({
          spinner: false
        });
        this.setState({
          id: res.data.data.plots.id,
          plotNumber: res.data.data.plots.plotNumber,
          price: res.data.data.plots.price,
          bedRooms: res.data.data.plots.bedRooms,
          area: res.data.data.plots.area,
          areaUnit: res.data.data.plots.areaUnit,
          unitType: res.data.data.plots.unitType,
          premittedUse: res.data.data.plots.premittedUse,
          buildingType: res.data.data.plots.buildingType,
          status: res.data.data.plots.status,
          thumbnail: res.data.data.plots.thumbnail[0].path
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
                    name="home"
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
                    UNIT DETAILS
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
            <View style={styles.shfImageView}>
              <Image
                style={styles.gridImage}
                source={{
                  uri: this.state.thumbnail
                }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <View style={styles.shfDetailView}>
                <View style={styles.shfDetailItem}>
                  <Text
                    style={{
                      //alignSelf: "center",
                      color: "#FFF",
                      fontSize: variable.shffooterTextFontSize
                    }}
                  >
                    PREMITED USE
                  </Text>
                  <Text
                    style={{
                      color: variable.shfTextColor,
                      //alignSelf: "center",
                      //justifyContent: "center",
                      fontSize: 14
                    }}
                  >
                    {this.state.premittedUse}
                  </Text>
                  <Text />
                </View>
                <View style={styles.shfDetailItem}>
                  <Text
                    style={{
                      //alignSelf: "center",
                      color: "#FFF",
                      fontSize: variable.shffooterTextFontSize
                    }}
                  >
                    UNIT TYPE
                  </Text>
                  <Text
                    style={{
                      color: variable.shfTextColor,
                      //alignSelf: "center",
                      //justifyContent: "center",
                      fontSize: 14
                    }}
                  >
                    {this.state.unitType}
                  </Text>
                  <Text />
                </View>
                <View style={styles.shfDetailItem}>
                  <Text
                    style={{
                      //alignSelf: "center",
                      color: "#FFF",
                      fontSize: variable.shffooterTextFontSize
                    }}
                  >
                    AREA/SQFT
                  </Text>
                  <Text
                    style={{
                      color: variable.shfTextColor,
                      //alignSelf: "center",
                      //justifyContent: "center",
                      fontSize: 14
                    }}
                  >
                    {this.state.area + " " + this.state.areaUnit}
                  </Text>
                  <Text />
                </View>
              </View>
              <View style={styles.shfDetailView}>
                <View style={styles.shfDetailItem}>
                  <Text
                    style={{
                      //alignSelf: "center",
                      color: "#FFF",
                      fontSize: variable.shffooterTextFontSize
                    }}
                  >
                    PLOT NO
                  </Text>
                  <Text
                    style={{
                      color: variable.shfTextColor,
                      //alignSelf: "center",
                      //justifyContent: "center",
                      fontSize: 14
                    }}
                  >
                    {this.state.plotNumber}
                  </Text>
                  <Text />
                </View>
                <View style={styles.shfDetailItem}>
                  <Text
                    style={{
                      //alignSelf: "center",
                      color: "#FFF",
                      fontSize: variable.shffooterTextFontSize
                    }}
                  >
                    BEDROOM TYPE
                  </Text>
                  <Text
                    style={{
                      color: variable.shfTextColor,
                      //alignSelf: "center",
                      //justifyContent: "center",
                      fontSize: 14
                    }}
                  >
                    {this.state.bedRooms}
                  </Text>
                  <Text />
                </View>
                <View style={styles.shfDetailItem}>
                  <Text
                    style={{
                      //alignSelf: "center",
                      color: "#FFF",
                      fontSize: variable.shffooterTextFontSize
                    }}
                  >
                    READY/OFF PLAN
                  </Text>
                  <Text
                    style={{
                      color: variable.shfTextColor,
                      //alignSelf: "center",
                      //justifyContent: "center",
                      fontSize: 14
                    }}
                  >
                    {this.state.buildingType}
                  </Text>
                  <Text />
                </View>
              </View>
              <View style={styles.shfDetailView}>
                <View style={styles.shfDetailItem}>
                  <Text
                    style={{
                      alignSelf: "flex-start",
                      color: "#FFF"
                    }}
                  >
                    Price
                  </Text>
                  <Text
                    style={{
                      color: variable.shfTextColor,
                      alignSelf: "flex-end",
                      fontSize: 22,
                      fontWeight: "bold"
                    }}
                  >
                    {this.state.price}
                  </Text>
                </View>
              </View>
              <View style={styles.shfDetailView}>
                <TouchableOpacity
                  style={styles.shfButton}
                  onPress={() => this.props.navigation.navigate("Appointment")}
                >
                  <View>
                    <Text style={{ color: variable.shfTextColor }}>
                      APPOINTMENT
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
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

export default UnitDetail;
