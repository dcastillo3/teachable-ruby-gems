import React from 'react';
import Main from './main';
import { shallow } from 'enzyme';

describe('Main', () => {
    it('renders successfully', () => {
        const testMain = shallow(<Main />);

        expect(testMain.exists()).toBe(true);
    })
})