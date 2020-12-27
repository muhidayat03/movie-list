import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomInput from '../CustomInput';
import PropTypes from 'prop-types';


const Header = ({ handleSearch }) => {
  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 130) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer>
        <Banner>
          <h1 style={{ fontFamily: 'Poppins', fontSize: 60, color: 'red', margin: 0, lineHeight: 1 }}>
            MOVIE LIST
          </h1>
        </Banner>
        <Navbar fixed={fixed}>
          <CustomInput placeholder='Search ex: Batman' onChange={handleSearch} />
        </Navbar>
      </HeaderContainer>
      <NavbarBg fixed={fixed}></NavbarBg>
    </>
  );
}


const HeaderContainer = styled.nav` 
  position: relative;
  height: 215px;
`;

const Banner = styled.div`  
  text-align: center;
  color : white;
  padding : 20px;  
  position: relative;
  overflow: hidden;
`;

const Navbar = styled.div`  
  padding: 24px 40px;  
  width:100%;
  position: absolute;
  z-index: 10;
  margin-bottom : 40px; 
  width: 100%; 
  max-width: 960px; 
  margin : auto;
  transition : position 1s; 
  left : 50%;
  transform:translateX(-50%);
  ${({ fixed }) => fixed && `
    position: fixed;
    top: 0; 
  `}
`;

const NavbarBg = styled.div`
  position : fixed;
  top : 0;
  left : 0;
  height : 180px;
  width : 100%;
  background-color : black;
  opacity: ${({ fixed }) => fixed ? 1 : 0};  
  transition : .4s;
  z-index : 3;
  background: rgb(0,0,0); 
  background: linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 44%, rgba(0,0,0,0) 100%);  
`;

Header.propTypes = {
  handleSearch: PropTypes.func,
};

export default Header;
