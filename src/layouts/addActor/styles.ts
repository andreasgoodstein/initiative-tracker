import { StyleSheet } from 'react-native';

import components from '../../styles/components';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
    },

    title: {
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        width: '100%',
    },

    inputFieldName: {
        ...components.inputField,
    },

    inputFieldNumber: {
        ...components.inputField,
        width: 75,
    },

    input: {
        ...components.input,
    },

    button: {
        ...components.button,
    },

    buttonText: {
        ...components.buttonText,
    },
});
