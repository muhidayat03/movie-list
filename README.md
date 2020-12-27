This project base on with my simple-react-ssr boilerplate that I made from scratch
repository : [https://github.com/muhidayat03/react-ssr-boilerplate](https://github.com/muhidayat03/react-ssr-boilerplate)


## How to run

clone this repo <br />
Then, run:
```bash
npm install
npm start
``` 

## Deploy
```bash
npm run build:prod
``` 


## Demo
Demo can be accessed via [https://movie-web-ssr.herokuapp.com/](https://movie-web-ssr.herokuapp.com/)

## Folder Structure

```
|-- src/
    |-- assets/
    |-- client/
        |-- components/ 
        |-- pages/
        |-- store/
            |--actions/
            |--reducers/
            |--types
    |-- helper/
    |-- index.js   
|-- config/
|-- webpack.base/
|-- webpack.client/
|-- webpack.server/

```

- `assets` : Folder to put assets in this case just a logo
- `assets` : for client side
- `components` : Folder to put shared reuseable components 
- `pages` : Folder to put pages in this case Movie, Detail Movie Page
- `store` : Folder to put redux stuff 
- `helper` : Folder to put some helper in this case renderer, createStore, GlobalStyles 
