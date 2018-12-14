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

    list: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    button: {
        ...components.button,
    },

    buttonText: {
        ...components.buttonText,
    },

    input: {
        ...components.input,
        width: 50,
    },

    inputField: {
        ...components.inputField,
    },
});
