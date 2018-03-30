import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  CHANGE_LANG
} from '../types';

const initialState = {
  loading: false,
  pages: [],
  posts: [],
  error: '',
  language: 'en'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        pages: action.payload.pages,
        posts: action.payload.posts,
        language: action.payload.language
      };
    }
    case FETCH_DATA_FAILED: {
      return { ...state, loading: false, error: action.error };
    }
    case CHANGE_LANG: {
      return { ...state, language: action.payload };
    }
    default:
      return state;
  }
};
