import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet, StyleSheetManager, createGlobalStyle } from 'styled-components';

const sheet = new ServerStyleSheet();
const GlobalStyle = createGlobalStyle`
body {
  td{
    border : 0;
    padding : 4px 0px;
    vertical-align: top;
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
  margin: 0;
  padding: 0;
  p{
    font-family: Poppins, Helvetica, Sans-Serif; 
    color: white; 
    margin: 0
  }  
  background: rgb(131,4,4);
  background: linear-gradient(138deg, rgba(180,4,4,1) 0%, rgba(29,4,3,1) 30%, rgba(29,4,3,1) 70%, rgba(180,8,8,1) 100%);
  background-attachment: fixed;
}
`;

export default (req, store, context) => {
  try {
    const content = renderToString(
      <Provider store={store} >
        <StaticRouter location={req.path} context={context}>
          <StyleSheetManager sheet={sheet.instance}>
            <div>
              <GlobalStyle />
              {renderRoutes(Routes)}
            </div>

          </StyleSheetManager>
        </StaticRouter >
      </Provider >
    );
    const styleTags = sheet.getStyleTags()
    const helmet = Helmet.renderStatic();
    return `<!DOCTYPE html>
              <head> 
                ${styleTags}
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}  
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
              </head>
              <body>
                  <div id="root">${content}</div>
                  <script>
                    window.INITIAL_STATE = ${serialize(store.getState()).replace(/</g, '\\u003c')}
                  </script>
                  <script src="/bundle.js"></script> 
              </body>
            </html>`;
  } catch (error) {
    console.error('err', error)
  }
}