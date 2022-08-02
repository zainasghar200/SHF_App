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

  shfImageView: {
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
    margin: 2
  },
  shfDetailView: {
    flex: 1,
    flexDirection: "row",
    margin: 2
  },
  shfDetailItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    //flexDirection: "column",
    backgroundColor: variable.shfViewColor,
    borderBottomWidth: 0.5,
    borderBottomColor: variable.shfTextColor,
    borderTopWidth: 0.5,
    borderTopColor: variable.shfTextColor,
    borderRightWidth: 0.5,
    borderRightColor: variable.shfTextColor,
    borderLeftWidth: 0.5,
    borderLeftColor: variable.shfTextColor,
    margin: 2,
    padding: 3
  },
  shfButton: {
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
    margin: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  gridImage: {
    flex: 1,
    //alignSelf: "stretch",
    resizeMode: "contain",
    width: undefined,
    height: undefined
  }
};
