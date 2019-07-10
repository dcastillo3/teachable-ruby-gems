import React from 'react';
import Text from './text';
import { shallow } from 'enzyme';

describe('Text', () => {
    it('rendears successfully', () => {
        const testText = shallow(<Text />);

        expect(testText.exists()).toBe(true);
    })
})