import { StyleSheet } from 'react-native';

import fonts from '../../../styles/fonts';

export default StyleSheet.create({
    actorContainer: {
        alignItems: 'center',
        backgroundColor: '#eee',
        borderColor: '#fff',
        borderWidth: 5,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-evenly',
        padding: 10,
        position: 'relative',
        width: '100%',
    },

    highlighted: {
        backgroundColor: '#aaa',
    },

    actorName: {
        ...fonts.p,
        flex: 1,
        textAlign: 'center',
    },

    actorStat: {
        ...fonts.p,
        textAlign: 'center',
        width: 60,
    },

    totalStat: {
        ...fonts.p,
        textAlign: 'center',
        width: 50,
    },
});
