import axios from 'axios';
import config from '../../../../config';
import {
  LIST_INITIAL_MOVIE,
  LIST_INITIAL_MOVIE_ERROR,
  LIST_MOVIE_LOADING,
  LIST_MOVIE_ERROR,
  LIST_MOVIE_SUCCESS,
  DETAIL_MOVIE_LOADING,
  DETAIL_MOVIE_ERROR,
  DETAIL_MOVIE_SUCCESS,
} from '../types';

const { apikey } = config;

export const listMovie = (page = '', search = '') => async dispatch => {
  let url = `https://www.omdbapi.com/?apikey=${apikey}&s=${search ? search : 'batman'}&page=${page}&type=movie`;
  dispatch({
    type: LIST_MOVIE_LOADING,
  });
  try {
    const res = await axios.get(url);
    if (res.data.Error) {
      console.log('error')
      dispatch({
        type: page == 1 ? LIST_INITIAL_MOVIE_ERROR : LIST_MOVIE_ERROR,
        payload: res.data.Error
      });
    } else {
      dispatch({
        type: page == 1 ? LIST_INITIAL_MOVIE : LIST_MOVIE_SUCCESS,
        payload: res.data.Search
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const detailMovie = (id = '') => async dispatch => {
  let url = `https://www.omdbapi.com/?apikey=${apikey}&i=${id}&type=movie`;
  dispatch({
    type: DETAIL_MOVIE_LOADING,
  });
  try {
    const res = await axios.get(url);
    if (res.data.Error) {
      dispatch({
        type: DETAIL_MOVIE_ERROR,
        payload: res.data.Error
      });
    } else {
      dispatch({
        type: DETAIL_MOVIE_SUCCESS,
        payload: res.data
      });
    }
  } catch (err) {
    console.log(err);
  }
}; 