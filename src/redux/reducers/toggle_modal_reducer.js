import { TOGGLE_MODAL } from '../actions/ui_actions';
export default function toggle_modal_reducer(state = false, action){
  switch(action.type){
    case TOGGLE_MODAL: {
      return action.payload; 
      break; 
    }
    default: return state; 
  }
}