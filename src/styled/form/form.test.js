import React from 'react';
import Form from './form';
import { shallow } from 'enzyme';

describe('Form', () => {
    it('renders successfully', () => {
        const testForm = shallow(<Form />);

        expect(testForm.exists()).toBe(true);
    })
})