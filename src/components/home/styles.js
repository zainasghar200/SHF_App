const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
import variable from "../../theme/variables/platform";

export default {
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "space-between",
    // flexDirection: "column"
  },
  imageContainer: {
    width: null,
    height: null,
    // display: flex,
    flex: 1,
    alignItems: "center"
    //justifyContent: "space-between"
  },

  logo: {
    //position: "absolute",
    // left: Platform.OS === "android" ? 40 : 50,
    //top: Platform.OS === "android" ? 35 : 40,
    width: 150,
    height: 150,

    // flexDirection: "row",
    // flexWrap: "wrap"

    flex: 1
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center"
  },

  gridView: {
    //marginTop: deviceHeight / 10,
    //flex: 2
  },
  itemContainer: {
    //justifyContent: "center",
    backgroundColor: variable.shfViewColor,
    // borderColor: "#b38600",
    // borderRadius: 5,
    padding: 10,
    height: 150,
    borderBottomWidth: 0.5,
    borderBottomColor: variable.shfTextColor,
    borderTopWidth: 0.5,
    borderTopColor: variable.shfTextColor,
    borderRightWidth: 0.5,
    borderRightColor: variable.shfTextColor,
    borderLeftWidth: 0.5,
    borderLeftColor: variable.shfTextColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  itemName: {
    //justifyContent: "flex-start",
    fontSize: 18,
    color: variable.SHF_TextColor,
    fontWeight: "600",
    textAlign: "center"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 14,
    color: variable.SHF_TextColor,
    textAlign: "center"
  },
  itemIcon: {
    color: variable.SHF_TextColor,
    flex: 1
  },

  shffooterText: {
    color: variable.SHF_TextColor,
    fontSize: variable.shffooterTextFontSize
  }
};
