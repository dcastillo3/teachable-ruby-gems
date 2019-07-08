import React from 'react';
import Footer from './footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
    it('renders successfully', () => {
        const testFooter = shallow(<Footer />);

        expect(testFooter.exists()).toBe(true);
    })
})