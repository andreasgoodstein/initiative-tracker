import { StyleSheet } from 'react-native';
import colors, { white } from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        width: '100%',
    },

    button: {
        ...colors.button,
        alignItems: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        margin: 10,
        width: 100,
    },

    buttonText: {
        color: white,
    },
});
