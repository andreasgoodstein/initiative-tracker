import { StyleSheet } from 'react-native';

import components, { white } from '../../../styles/components';

export default StyleSheet.create({
    container: {
        ...components.header,
    },

    title: {
        color: white,
        marginBottom: 10,
    },
});
