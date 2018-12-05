import { shallow } from 'enzyme';
import React from 'react';

import IActor from 'entities/IActor';

import ActorList from './index';

const testList: IActor[] = [
    {
        initiativeBonus: 30,
        name: 'Test Actor',
    },
];

describe('the ActorList component', () => {
    it('renders', () => {
        const wrapper = shallow(<ActorList items={[...testList]}/>);

        expect(wrapper).not.toBeNull();
        expect(wrapper).toMatchSnapshot();
    });
});
