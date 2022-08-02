const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
import variable from "../../theme/variables/platform";

export default {
  imageContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: null,
    height: null
    // display: flex,
  },

  shffooterText: {
    color: variable.SHF_TextColor,
    fontSize: variable.shffooterTextFontSize
  },

  shfitem: {
    flex: 0.3,

    // borderBottomWidth: 0.5,
    // borderBottomColor: variable.shfTextColor,
    // borderTopWidth: 0.5,
    // borderTopColor: variable.shfTextColor,
    // borderRightWidth: 0.5,
    // borderRightColor: variable.shfTextColor,
    // borderLeftWidth: 0.5,
    // borderLeftColor: variable.shfTextColor,
    padding: 3,
    marginTop: 10
  }
};
