import { SEARCH_VIDEOS, SEARCH_ERROR } from './types';

// Get Videos by Search Paramter
export const getVideos = (text = 'empty') => (dispatch) => {
  try {
    // run loading animation
    dispatch({
      type: SEARCH_VIDEOS,
      payload: `${text}`,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: 'got an error',
    });
  }
};
