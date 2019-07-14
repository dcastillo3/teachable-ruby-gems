import React from 'react';
import Title from './title';
import { shallow } from 'enzyme';

describe('Title', () => {
    it('rendears successfully', () => {
        const testTitle = shallow(<Title />);

        expect(testTitle.exists()).toBe(true);
    })
})