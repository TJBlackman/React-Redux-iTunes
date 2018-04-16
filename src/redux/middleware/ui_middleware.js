import {
  TOGGLE_MODAL
} from '../actions/ui_actions'



const api_middleware = ({dispatch, getState}) => next => action => {
  switch(action.type){

    case TOGGLE_MODAL: {
      const modal_state = getState().modal_is_showing; 
      next({
        type: TOGGLE_MODAL,
        payload: !modal_state
      }); 
      break; 
    }

    default: next(action);
  }
}; 



export default api_middleware; 