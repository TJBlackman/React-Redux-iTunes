import axios from 'axios';
import { 
  QUERY_ITUNES,
  query_itunes_action, 
  QUERY_API_SUCCESS,
  query_api_success_action,
  QUERY_API_FAILED,
  query_api_error_action,
} from '../actions/api_actions';

import {
  update_cur_pructs_action,
  update_search_history_action,
  update_active_media,
  update_current_page_action
} from '../actions/state_actions';

import {
  hide_spinner_action
} from '../actions/ui_actions';



const api_middleware = ({dispatch, getState}) => next => action => {
  switch(action.type){

    case QUERY_ITUNES: {
      next(action);
      const iTunesURL = 'https://itunes.apple.com/search?';
      const { input, media } = action.payload; 
      const params = `term=${input.trim()}&media=${media}&limit=200`;
      axios.get(iTunesURL + params)
        .then(response => { 
          dispatch(query_api_success_action({
            term: input.trim(),
            media: media,
            results: response.data.results,
            id: new Date().getTime()
          }));
        })
        .catch((err) => { 
          // console.log(err)
          query_api_error_action(err) 
        });
      break; 
    }

    case QUERY_API_SUCCESS: {
      next(action);
      dispatch(update_search_history_action(action.payload));
      dispatch(update_active_media(action.payload.media));
      dispatch(update_current_page_action("reset"))
      dispatch(hide_spinner_action());
      break; 
    }

    case QUERY_API_FAILED: {
      // todo: show error message
      break; 
    }

    default: next(action);
  }
}; 



export default api_middleware; 