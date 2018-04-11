import * as Actions from '../actions/ui_actions';

export default function toggle_search_spinner(state = false, action){
  switch(action.type){
    case Actions.SHOW_SPINNER: // fall through 
    case Actions.HIDE_SPINNER: {
      return action.payload; 
    }

    default: return state; 
  }
}