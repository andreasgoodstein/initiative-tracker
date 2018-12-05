import { shallow } from 'enzyme';
import React from 'react';

import IActor from 'entities/IActor';

import Actor from './index';

const testActor: IActor = {
    initiativeBonus: 30,
    name: 'Test Actor',
};

describe('the Actor component', () => {
    it('renders', () => {
        const wrapper = shallow(<Actor actor={testActor}/>);

        expect(wrapper).not.toBeNull();
        expect(wrapper).toMatchSnapshot();
    });
});
