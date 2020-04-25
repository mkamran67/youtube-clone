import {
  SEARCH_VIDEOS,
  SEARCH_ERROR,
  LOADING_TRUE,
  LOADING_FALSE,
} from './types';
import axios from 'axios';

// Get Videos by Search Paramter
export const getVideos = (text) => async (dispatch) => {
  try {
    console.log(`Getting videos`);

    // Loading True
    dispatch({
      type: LOADING_TRUE,
      payload: null,
    });

    // Fetch video search result/list based on search criteria
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${process.env.REACT_APP_NAME}`
      )
      .then((res) => {
        dispatch({
          type: SEARCH_VIDEOS,
          payload: {
            nextPageToken: res.data.nextPageToken,
            items: res.data.items,
          },
        });
      });

    // Loading False
    dispatch({
      type: LOADING_FALSE,
      payload: null,
    });
  } catch (err) {
    console.log(`Got an error :/ -> ${err.data}`);

    dispatch({
      type: SEARCH_ERROR,
      payload: 'got an error',
    });
  }
};
