/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ImageContainer from './index';



describe('<ImageContainer>', () => {
  it('should render correctly ', () => {
    const wrapper = shallow(<ImageContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
