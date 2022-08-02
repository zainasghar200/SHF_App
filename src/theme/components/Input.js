// @flow

import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const inputTheme = {
    ".multiline": {
      height: null
    },
    height: variables.inputHeightBase,
    color: "white",
    paddingLeft: 6,
    paddingRight: 5,
    flex: 1,
    fontSize: variables.inputFontSize
  };

  return inputTheme;
};
