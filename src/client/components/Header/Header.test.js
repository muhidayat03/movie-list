/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';


describe('<CHeaderol>', () => {
  it('should render correctly ', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
