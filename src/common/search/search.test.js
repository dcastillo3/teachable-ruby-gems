import React from 'react';
import Search from './search';
import { shallow } from 'enzyme';

describe('Search', () => {
    it('renders successfully', () => {
        const testSearch = shallow(<Search />);

        expect(testSearch.exists()).toBe(true);
    })
})