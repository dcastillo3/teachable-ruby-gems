import React from 'react';
import Input from './input';
import { shallow } from 'enzyme';

describe('Input', () => {
    it('renders successfully', () => {
        const testInput = shallow(<Input />);

        expect(testInput.exists()).toBe(true);
    })
})