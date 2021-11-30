import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    const button_add = container.find('#operator_add');
    button_add.simulate('click');
    button4.simulate('click');
    const button_equals = container.find('#operator-equals');
    button_equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');

  })

  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7');
    button7.simulate('click');
    const button_subtract = container.find('#operator-subtract');
    button_subtract.simulate('click');
    const button4 = container.find('#number4');
    button4.simulate('click');
    const button_equals = container.find('#operator-equals');
    button_equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');

  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    button3.simulate('click');
    const button_multiply = container.find('#operator-multiply');
    button_multiply.simulate('click');
    const button5 = container.find('#number5');
    button5.simulate('click');
    const button_equals = container.find('#operator-equals');
    button_equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    button2.simulate('click');
    const button1 = container.find('#number1');
    button1.simulate('click');
    const button_divide = container.find('#operator-divide');
    button_divide.simulate('click');
    const button7 = container.find('#number7');
    button7.simulate('click');
    const button_equals = container.find('#operator-equals');
    button_equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

it('should concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');
    button2.simulate('click');
    button2.simulate('click');
    button2.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('222');
})

it('should clear the running total without affecting the calculation', () => {
  const button2 = container.find('#number2');
    button2.simulate('click');
    const button1 = container.find('#number1');
    button1.simulate('click');
    const button_add = container.find('#operator_add');
    button_add.simulate('click');
    const button7 = container.find('#number7');
    button7.simulate('click');
    const button_equals = container.find('#operator-equals');
    button_equals.simulate('click');
    button_add.simulate('click');
    button2.simulate('click');
    const button_clear = container.find('#clear');
    button_clear.simulate('click');
    button_equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('28');
})


})

