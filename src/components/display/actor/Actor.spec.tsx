import { shallow } from 'enzyme';
import React from 'react';

import IActor from 'entities/IActor';

import Actor from './index';

const testActor: IActor = {
    clone: () => ({} as IActor),
    hasActiveTurn: false,
    id: 1,
    initiativeBonus: 30,
    name: 'Test Actor',
    sort: () => 0,
};

describe('the Actor component', () => {
    it('renders', () => {
        const wrapper = shallow(<Actor actor={testActor}/>);

        expect(wrapper).not.toBeNull();
        expect(wrapper).toMatchSnapshot();
    });
});
