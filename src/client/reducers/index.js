import { combineReducers } from 'redux';
import { listMovie, detailMovie } from './movieReducer';


export default combineReducers({
  listMovie,
  detailMovie
})

