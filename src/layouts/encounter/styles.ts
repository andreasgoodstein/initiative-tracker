import { StyleSheet } from "react-native";

import styles from "../styles";

export default StyleSheet.create({
    container: {
        ...styles.layoutContainer,
        flex: 1,
        justifyContent: "space-between",
    },

    listHeader: {
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 5,
        paddingRight: 15,
        width: "100%",
    },

    nameText: {
        flex: 1,
        textAlign: "center",
    },

    numberText: {
        textAlign: "center",
        width: 60,
    },
});
