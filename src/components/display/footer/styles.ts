import { StyleSheet } from "react-native";

import components from "../../../styles/components";

export default StyleSheet.create({
  container: {
    alignItems: "stretch",
    flexDirection: "row",
    height: 40,
    justifyContent: "space-evenly",
    width: "100%"
  },

  buttonFooter: {
    ...components.buttonTab,
    flex: 1,
  },

  buttonText: {
    ...components.buttonText
  }
});
