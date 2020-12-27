import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import GlobalStyle from "./globalStyles"; 

const sheet = new ServerStyleSheet();

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