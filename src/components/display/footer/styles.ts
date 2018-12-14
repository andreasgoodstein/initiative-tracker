import { StyleSheet } from 'react-native';

import components from '../../../styles/components';

export default StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flexDirection: 'row',
        height: 75,
        justifyContent: 'space-between',
        width: '100%',
    },

    button: {
        ...components.button,
    },

    buttonText: {
        ...components.buttonText,
    },
});
