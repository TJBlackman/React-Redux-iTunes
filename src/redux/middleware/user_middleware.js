
import { NAV_CLICKED, FORM_SUBMITTED, INCREMENT_PAGE_NUMBER, DECREMENT_PAGE_NUMBER, HISTORY_ITEM_CLICKED, FORM_MEDIA_TYPE_CHANGED, WATCH_VIDEO_PREVIEW } from '../actions/user_actions';
import { update_active_media, update_current_page_action, update_cur_pructs_action, set_video_preview_action } from '../actions/state_actions';
import { query_itunes_action } from '../actions/api_actions';
import { show_spinner_action, toggle_modal_action } from '../actions/ui_actions';

const user_middleware_function = ({dispatch, getState}) => next => action => {
  const { current_products, products_per_page, current_page, history } = getState(); 
  switch(action.type){

    case NAV_CLICKED: {
      next(action); 
      dispatch(update_active_media(action.payload));
      break; 
    }

    case FORM_MEDIA_TYPE_CHANGED: {
      next(action); 
      dispatch(update_active_media(action.payload));
      break; 
    }

    case FORM_SUBMITTED: {
      next(action);
      dispatch(show_spinner_action());
      dispatch(query_itunes_action(action.payload));
      break; 
    }

    case INCREMENT_PAGE_NUMBER: {
      const max = Math.ceil(current_products.length / products_per_page ); 
      if (current_page !== max){
        next(action);
        dispatch(update_current_page_action(1))
      }
      break; 
    }

    case DECREMENT_PAGE_NUMBER: {
      if (current_page > 1){
        next(action);
        dispatch(update_current_page_action(-1))
      }
      break;
    }
    
    case HISTORY_ITEM_CLICKED: {
      next(action); 
      const old_results = history.find(item => item.id === action.payload).results; 
      dispatch(update_current_page_action("reset"));
      dispatch(update_cur_pructs_action(old_results));
      break; 
    }

    case WATCH_VIDEO_PREVIEW: {
      next(action);
      dispatch(set_video_preview_action(action.payload)); 
      dispatch(toggle_modal_action(action.payload)); 
      break; 
    }
    
    // default
    default: next(action);
  }
}


export default user_middleware_function; 
