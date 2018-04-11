import { 
  UPDATE_ACTIVE_MEDIA, 
  UPDATE_CURRENT_PAGE,
  update_cur_pructs_action
} from '../actions/state_actions';

const state_middleware = state => next => action => {
  switch(action.type){
    
    case UPDATE_ACTIVE_MEDIA: {
      next(action);
      const { history, active_media_type } = state.getState(); 
      const history_object = history.find(item => item.media === active_media_type);
      const current_products = history_object ? history_object.results : []; 
      state.dispatch(update_cur_pructs_action(current_products));
      break; 
    }

    case UPDATE_CURRENT_PAGE: {
      const cur_page = state.getState().current_page; 

      action.payload === 'reset' ?
        action.payload = 1 :
        action.payload = cur_page + action.payload

      next(action);
      break; 
    }
    default: next(action);
  }
} 

export default state_middleware;