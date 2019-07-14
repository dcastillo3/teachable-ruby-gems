import React from 'react';
import Grid from './grid';
import { shallow } from 'enzyme';

describe('Grid', () => {
    it('renders successfully', () => {
        const testGrid = shallow(<Grid />);

        expect(testGrid.exists()).toBe(true);
    })
})