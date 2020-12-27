import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const LayoutStyled = styled.div`
  padding: 20px;
  width: 100%; 
  max-width: 960px;
  margin: auto;  
`;

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

Layout.propTypes = {
  children: PropTypes.node,
};


export default Layout;
