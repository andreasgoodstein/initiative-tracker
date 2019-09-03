import { shallow } from 'enzyme';
import React from 'react';

import IActor from 'entities/IActor';

import ActorList from './index';

const testList: IActor[] = [
    {
        clone: () => ({} as IActor),
        hasActiveTurn: false,
        id: 1,
        initiative: 30,
        name: 'Test Actor',
        sort: () => 0,
    },
];

describe('the ActorList component', () => {
    it('renders', () => {
        const wrapper = shallow(<ActorList items={[...testList]} removeActor={() => undefined}/>);

        expect(wrapper).not.toBeNull();
        expect(wrapper).toMatchSnapshot();
    });
});
