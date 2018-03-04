import * as React from 'react';
import { mount } from 'enzyme';
import { Calculator_basis } from '../Calculator_basis';
test('reset erg, when one input field changes', () => {
    const calculator = mount(React.createElement(Calculator_basis, null));
    calculator.find('.fstNumber').simulate('change', { target: { value: '41' } });
    calculator.find('.sndNumber').simulate('change', { target: { value: '1' } });
    calculator.find('.addButton').simulate('click');
    let result = calculator.find('.result').text();
    expect(result).toBe('42');
    calculator.find('.fstNumber').simulate('change', { target: { value: '1' } });
    result = calculator.find('.result').text();
    expect(result).toBe('0');
});
