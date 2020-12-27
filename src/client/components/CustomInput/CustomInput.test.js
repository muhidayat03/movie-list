/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from './index';
import toJson from "enzyme-to-json"


 
describe('CustomInput', () => {
  it('should render correctly ', () => {
    const wrapper = shallow(<CustomInput />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
