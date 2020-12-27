/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Layout from './index';



describe('<Layout>', () => {
  it('should render correctly ', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});
