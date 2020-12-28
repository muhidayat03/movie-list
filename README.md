This project base on with my simple-react-ssr boilerplate that I made from scratch
repository : [https://github.com/muhidayat03/react-ssr-boilerplate](https://github.com/muhidayat03/react-ssr-boilerplate)


## Logic Test Anagram
```bash
node anagram
``` 

## How to run

clone this repo <br />
Then, run:
```bash
npm install
npm run dev
``` 

## Deploy

```bash
npm run build:prod
``` 


## Demo

[https://movie-web-ssr.herokuapp.com/](https://movie-web-ssr.herokuapp.com/)

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
|-- anagram.js/
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
