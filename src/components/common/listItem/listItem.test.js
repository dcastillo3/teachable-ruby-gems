import React from 'react';
import ListItem from './listItem';
import { shallow } from 'enzyme';

describe('ListItem', () => {
    it('renders successfully', () => {
        const testListItem = shallow(<ListItem />);

        expect(testListItem.exists()).toBe(true);
    })
})