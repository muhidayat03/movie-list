import '@babel/polyfill';
import express from 'express';
import renderer from './helper/renderer';
import createStore from './helper/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {

  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({ route }) => { 
    return route.loadData ? route.loadData(store, req.path) : null
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
    return null;
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });




});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000')
});