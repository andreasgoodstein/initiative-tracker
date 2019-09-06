import { StyleSheet } from "react-native";

import components from "../../../styles/components";

export default StyleSheet.create({
  ...components,

  container: {
    ...components.header
  },

  counter: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    width: 50,
  },

  text: {
    fontSize: 16
  }
});
