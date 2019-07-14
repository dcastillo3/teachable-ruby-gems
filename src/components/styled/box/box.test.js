import React from 'react';
import Box from './box';
import { shallow } from 'enzyme';

describe('Box', () => {
    it('renders successfully', () => {
        const testBox = shallow(<Box />);

        expect(testBox.exists()).toBe(true);
    })
})