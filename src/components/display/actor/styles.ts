import {StyleSheet} from 'react-native';

import fonts from '../../../styles/fonts';

export default StyleSheet.create({
    actorContainer: {
        alignItems: 'center',
        backgroundColor: '#eee',
        borderColor: '#fff',
        borderWidth: 5,
        flexDirection: 'row',
        height: 70,
        padding: 10,
        width: '100%',
    },

    actorStat: {
        ...fonts.p,
        paddingRight: 10,
    },

    totalStat: {
        ...fonts.p,
        alignSelf: 'flex-end',
    },
});
