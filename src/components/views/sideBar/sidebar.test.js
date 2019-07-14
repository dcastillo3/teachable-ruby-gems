import React from 'react';
import SideBar from './sideBar';
import { shallow } from 'enzyme';

describe('SideBar', () => {
    it('renders successfully', () => {
        const testSideBar = shallow(<SideBar />);

        expect(testSideBar.exists()).toBe(true);
    })
})