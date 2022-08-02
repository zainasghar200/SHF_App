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
  Item,
  Form,
  Input,
  Content,
  Textarea,
  Toast
} from "native-base";
import axios from "axios";
import * as ConstClass from "../../common/Constants";
import variable from "../../theme/variables/platform";
import Spinner from "react-native-loading-spinner-overlay";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  ImageBackground,
  TouchableHighlight,
  Image,
  Keyboard,
  Linking
} from "react-native";
const backArrow = require("../../../assets/backArrow.png");

import styles from "./styles";
const screenBg = require("../../../assets/launchscreen-bg.png");

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    //event.preventDefault();

    //console.log(this.state);
    Keyboard.dismiss();
    if (
      this.state.name === "" ||
      this.state.name === undefined ||
      this.state.email === "" ||
      this.state.email === undefined ||
      this.state.contactNumber === "" ||
      this.state.contactNumber === undefined ||
      this.state.message === "" ||
      this.state.message === undefined
    ) {
      Toast.show({
        text: "All fields are required!",
        buttonText: "Okay",
        type: "warning",
        duration: 4000
      });
      return;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === false) {
      Toast.show({
        text: "Incorrect Email!",
        buttonText: "Okay",
        type: "warning",
        duration: 4000
      });
      return;
    }
    this.setState({
      spinner: true
    });
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    data.append("contactNumber", this.state.contactNumber);
    data.append("message", this.state.message);

    axios
      .post(
        ConstClass.SHF_BACK_END + "appointment",
        data,
        {
          // receive two parameter endpoint url ,form data
        }
      )
      .then(res => {
        this.setState({
          spinner: false
        });
        if (res.status === 200) {
          Toast.show({
            text: "Appointment Booked",
            buttonText: "Okay",
            type: "success",
            duration: 4000
          });
        } else if (res.status === 401) {
          Toast.show({
            text: "Something Went Wronge",
            buttonText: "Okay",
            type: "danger",
            duration: 4000
          });
        }
      })
      .catch(error => {
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
  };

  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={screenBg} style={styles.imageContainer}>
          <Spinner
            visible={this.state.spinner}
            textContent={"Sending Appointment"}
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
                    APPOINTMENT
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

          <Content padder contentContainerStyle={{ flex: 1 }}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
              <Form style={{ flex: 1 }}>
                <Item style={styles.shfitem}>
                  <Icon name="person" style={{ color: "#fff" }} />
                  <Input
                    style={{ color: "white" }}
                    placeholder="Full Name"
                    name="name"
                    onChangeText={text => this.setState({ name: text })}
                  />
                </Item>
                <Item style={styles.shfitem}>
                  <Icon name="mail" style={{ color: "#fff" }} />
                  <Input
                    style={{ color: "white" }}
                    placeholder="Your Email"
                    name="email"
                    onChangeText={text => this.setState({ email: text })}
                  />
                </Item>
                <Item style={styles.shfitem}>
                  <Icon name="call" style={{ color: "#fff" }} />
                  <Input
                    style={{ color: "white" }}
                    placeholder="Contact Number"
                    name="contactNumber"
                    onChangeText={text =>
                      this.setState({ contactNumber: text })}
                  />
                </Item>
                <Item style={{ flex: 3, marginTop: 10 }}>
                  <Textarea
                    style={{ color: "white" }}
                    placeholder="Message here                      "
                    rowSpan={7}
                    name="message"
                    onChangeText={text => this.setState({ message: text })}
                  />
                </Item>
                <Button
                  block
                  primary
                  bordered
                  style={{ flex: 0.3, marginTop: 10 }}
                  onPress={this.handleSubmit}
                >
                  <Text style={{ color: variable.shfTextColor }}>SUBMIT</Text>
                </Button>
              </Form>
            </KeyboardAwareScrollView>
          </Content>

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

export default Appointment;
