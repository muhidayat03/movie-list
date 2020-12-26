import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageNotAvalable from '../../assets/not_avalable.png';




export default ({ image, height, width }) => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', close);
      } else {
        window.removeEventListener('click', close);
      }
    }, 0);
    return () => {
      window.removeEventListener('click', close);
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false)
  }



  return (
    <ImageContainer isOpen={isOpen} width={width} height={height} onClick={() => setIsOpen(true)} >
      <ImagePlaceholder isOpen={isOpen} />
      <LazyLoadImage src={image == 'N/A' ? ImageNotAvalable : image} />
    </ImageContainer>
  );
}


const ImageContainer = styled.div`  
  height: ${({ height }) => height};
  width: ${({ width }) => width};  
  background-color: black;
  -webkit-box-shadow: 0px 0px 30px 8px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 30px 8px rgba(0,0,0,1);
  box-shadow: 0px 0px 30px 8px rgba(0,0,0,1);   

  img{
    width:  ${({ isOpen, width }) => isOpen ? '480px' : width};
    height: ${({ isOpen, height }) => isOpen ? '640px' : height}; 
    object-fit:  ${({ isOpen }) => isOpen ? 'contain' : 'cover'};
    z-index : ${({ isOpen }) => isOpen ? '10' : '2'};
    position:  ${({ isOpen }) => isOpen ? 'fixed' : 'absolute'};
    top : ${({ isOpen }) => isOpen ? '50%' : 'auto'}; 
    left : ${({ isOpen }) => isOpen ? '50%' : 'auto'};  
    transform: translateX(${({ isOpen }) => isOpen ? '-50%' : '0'});
    margin-top : ${({ isOpen }) => isOpen ? '-320px' : '0'};
    max-width: 90%;
    max-height: 90%; 
    transition: transform 0.3s, z-index 0s; 
  }
  
`;

const ImagePlaceholder = styled.div`
  background-color: black; 
  position : fixed;
  top: 0;
  left : 0;
  width: 100vw;
  height: 100vh;
  opacity: .8;
  z-index : 10;
  display : ${({ isOpen }) => isOpen ? 'block' : 'none'}; 
`;


