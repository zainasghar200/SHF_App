const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
import variable from "../../theme/variables/platform";

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
    // display: flex,
  },

  shffooterText: {
    color: variable.SHF_TextColor,
    fontSize: variable.shffooterTextFontSize
  },
  shfItemGrid: {
    flex: 1,
    backgroundColor: variable.shfViewColor,
    borderBottomWidth: 0.5,
    borderBottomColor: variable.shfTextColor,
    borderTopWidth: 0.5,
    borderTopColor: variable.shfTextColor,
    borderRightWidth: 0.5,
    borderRightColor: variable.shfTextColor,
    borderLeftWidth: 0.5,
    borderLeftColor: variable.shfTextColor,
    margin: 3,
    padding: 5
  },
  itemName: {
    //justifyContent: "flex-start",
    fontSize: 16,
    color: variable.SHF_TextColor,
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: variable.SHF_TextColor
  }
};
