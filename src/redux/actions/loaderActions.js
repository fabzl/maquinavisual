import { LOADER_LOADING, CONTENT_LOADED, LOADER_VISIBLE } from "../types";

export const loaderLoading = url => {
  console.log("loader loading  ");
  return {
    type: LOADER_LOADING
  };
};

export const contentLoaded = () => {
  console.log("contentLoaded :D ");

  return dispatch => {
    dispatch({
      type: CONTENT_LOADED
    });
  };
};
export const loaderVisible = () => {
  console.log("loader visibile :D ");

  return dispatch => {
    dispatch({
      type: LOADER_VISIBLE
    });
  };
};
