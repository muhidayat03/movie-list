import {
  LIST_MOVIE_LOADING,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_ERROR, 
  LIST_INITIAL_MOVIE,
  LIST_INITIAL_MOVIE_ERROR,
  DETAIL_MOVIE_LOADING,
  DETAIL_MOVIE_SUCCESS,
  DETAIL_MOVIE_ERROR
} from '../types';

const initialState = {
  loading: false,
  response: false,
  error: false, 
  error_last : false
}

export const listMovie = (state = {initialState, data: []}, action) => {
  switch (action.type) {
    case LIST_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
        error: false
      };
    case LIST_INITIAL_MOVIE:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false
      };
    case LIST_INITIAL_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
    case LIST_MOVIE_LOADING:
      return {
        ...state,
        loading: true, 
        error: false
      };
    case LIST_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export const detailMovie = (state = {initialState, data: {}}, action) => {
  switch (action.type) {
    case DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error : false
      };
    case DETAIL_MOVIE_LOADING:
      return {
        ...state,
        loading: true, 
        error : false,
      };
    case DETAIL_MOVIE_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

