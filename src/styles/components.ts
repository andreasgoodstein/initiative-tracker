import { FlexStyle, TextStyle } from "react-native";

export const colors = {
    black: "#000",
    greyLight: "#ddd",
    primary: "#2020bb",
    white: "#fff",
};

interface IComponents {
    button: FlexStyle;
    header: FlexStyle;
    buttonText: TextStyle;
    input: FlexStyle;
    inputField: FlexStyle;
    row: FlexStyle;
}

export default {
    button: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 50,
        height: 40,
        justifyContent: "center",
        margin: 10,
        width: 100,
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
