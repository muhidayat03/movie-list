
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(131,4,4);
    background: linear-gradient(138deg, rgba(180,4,4,1) 0%, rgba(29,4,3,1) 30%, rgba(29,4,3,1) 70%, rgba(180,8,8,1) 100%);
    background-attachment: fixed;
    margin: 0;
    padding: 0;
  }
  td{
    border : 0;
    padding : 0px;
    padding-right: 5px;
    vertical-align: top; 
  }
  .left{
    width : 100px; 
    display: flex;
    justify-content: space-between;
    width : 140px;
  } 
  h3{
    color : white;
    font-size: 18px;
    font-weight : 600;
    margin: 0;
    margin-top: 10px;
    font-family: Poppins, Helvetica, Sans-Serif; 
    word-wrap: break-word;
  }
  *{
    color : white;
    box-sizing: border-box;
    font-family: Poppins, Helvetica, Sans-Serif; 
  }
  p{
    font-family: Poppins, Helvetica, Sans-Serif; 
    color: white; 
    margin: 0
  }  
`;


export default GlobalStyle;