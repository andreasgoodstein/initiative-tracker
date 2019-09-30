import { FlexStyle, TextStyle } from "react-native";

export const colors = {
    black: "#000",
    greyLight: "#ddd",
    primary: "#2020bb",
    white: "#fff",
};

interface IComponents {
    button: FlexStyle;
    buttonSmall: FlexStyle;
    buttonTab: FlexStyle;
    header: FlexStyle;
    buttonText: TextStyle;
    input: FlexStyle;
    inputField: FlexStyle;
    row: FlexStyle;
}

const buttonSize = 75;

export default {
    button: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: buttonSize,
        height: buttonSize,
        justifyContent: "center",
        margin: 10,
        width: buttonSize,
    },

    buttonSmall: {
        borderRadius: (buttonSize / 3 * 2),
        height: (buttonSize / 3 * 2),
        width: (buttonSize / 3 * 2),
    },

    buttonTab: {
        alignItems: "center",
        backgroundColor: colors.primary,
        justifyContent: "center",
        margin: 1,
        padding: 10,
    },

    buttonText: {
        color: colors.white,
    },

    header: {
        alignItems: "center",
        flexDirection: "row",
        height: 40,
        justifyContent: "center",
        width: "100%",
    },

    input: {
        alignItems: "center",
        backgroundColor: colors.greyLight,
        height: 40,
        justifyContent: "center",
        padding: 5,
        textAlign: "center",
        width: "100%",
    },

    inputField: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
        padding: 5,
        width: "100%",
    },

    row: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
} as IComponents;
