import * as React from 'react'
import { mount } from 'enzyme';

import { NumberField } from "../index";

test('only numbers can be typed into NumberField', () => {
    let inputValue = 0;
    const onChange = v => inputValue = v;
    const numberField = mount(<NumberField onChange={onChange} />);

    numberField.find('input').simulate('change', {target: {value: '1A2'} });

    expect(inputValue).toBe(12);
});