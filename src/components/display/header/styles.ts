import { StyleSheet } from 'react-native';

import components, { colors } from '../../../styles/components';

export default StyleSheet.create({
    container: {
        ...components.header,
    },

    title: {
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
});
