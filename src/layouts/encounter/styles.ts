import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },

  listHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
    width: "100%"
  },

  nameText: {
    flex: 1,
    textAlign: "left"
  },

  numberText: {
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },

  addActorButton: {
    bottom: 120,
    position: "absolute",
    right: 3
  },

  nextActorButton: {
    bottom: 40,
    position: "absolute",
    right: 3
  }
});
