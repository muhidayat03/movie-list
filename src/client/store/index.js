import { combineReducers } from 'redux';
import { listMovie, detailMovie } from './reducers/movieReducer';


export default combineReducers({
  listMovie,
  detailMovie
})

