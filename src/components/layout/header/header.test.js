import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';

describe('Header', () => {
    it('renders successfully', () => {
        const testHeader = shallow(<Header />);

        expect(testHeader.exists()).toBe(true);
    })
})