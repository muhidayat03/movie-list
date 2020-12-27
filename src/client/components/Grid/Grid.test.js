/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from './index';




describe('<Row>', () => {
  it('should render correctly ', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Col>', () => {
  it('should render correctly ', () => {
    const wrapper = shallow(<Col />);
    expect(wrapper).toMatchSnapshot();
  });
});
