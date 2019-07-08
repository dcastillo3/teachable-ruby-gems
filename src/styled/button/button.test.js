import React from 'react';
import Button from './button';
import { shallow } from 'enzyme';

describe('Button', () => {
    it('renders successfully', () => {
        const testButton = shallow(<Button />);

        expect(testButton.exists()).toBe(true);
    })
})