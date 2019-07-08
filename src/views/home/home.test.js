import React from 'react';
import Home from './home';
import { shallow } from 'enzyme';

describe('Home', () => {
    it('renders without crashing', () => {
        const testHome = shallow(<Home />);

        expect(testHome.exists()).toBe(true);
    })
})