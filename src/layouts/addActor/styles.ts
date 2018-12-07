import { StyleSheet } from 'react-native';

import components from '../../styles/components';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 35,
    },

    inputField: {
        ...components.inputField,
    },

    input: {
        ...components.input,
    },

    button: {
        ...components.button,
        height: 40,
    },

    buttonText: {
        ...components.buttonText,
    },
});
