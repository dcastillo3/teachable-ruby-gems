import React from 'react';
import List from './list';
import { shallow } from 'enzyme';

describe('List', () => {
    it('renders successfully', () => {
        const testList = shallow(<List />);

        expect(testList.exists()).toBe(true);
    })
})