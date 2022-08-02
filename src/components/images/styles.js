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

  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },

  gridView: {
    //marginTop: deviceHeight / 9,
    flex: 1
  },
  itemContainer: {
    //justifyContent: "center",
    backgroundColor: variable.shfViewColor,

    padding: 10,
    height: 150,
    // borderColor: variable.shfTextColor,
    // borderwidth: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: variable.shfTextColor,
    borderTopWidth: 0.5,
    borderTopColor: variable.shfTextColor,
    borderRightWidth: 0.5,
    borderRightColor: variable.shfTextColor,
    borderLeftWidth: 0.5,
    borderLeftColor: variable.shfTextColor
  },
  itemName: {
    fontSize: 16,
    color: variable.SHF_TextColor,
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: variable.SHF_TextColor
  },
  itemIcon: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: variable.SHF_TextColor
  },

  shffooterText: {
    color: variable.SHF_TextColor,
    fontSize: variable.shffooterTextFontSize
  },
  gridImage: {
    flex: 1,
    //alignSelf: "stretch",
    resizeMode: "contain",
    width: undefined,
    height: undefined
  }
};
