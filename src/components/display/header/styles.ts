import { StyleSheet } from 'react-native';

import colors, { white } from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        ...colors.header,
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        width: '100%',
    },

    title: {
        color: white,
        marginBottom: 10,
    },
});
