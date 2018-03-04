import * as React from 'react'
import { mount }  from 'enzyme'

import { Calculator_basis } from '../Calculator_basis'

test('41 + 1 = 42', () => {
    const calculator = mount(<Calculator_basis />);
    calculator.find('.fstNumber').simulate('change', {target: {value: '41'}});
    calculator.find('.sndNumber').simulate('change', {target: {value: '1'}});
    calculator.find('.addButton').simulate('click');

    const result = calculator.find('.result').text();
    expect(result).toBe('42');
});