import { UPDATE_CURRENT_PAGE } from '../actions/state_actions';

export default function current_page_reducer(state = 1, action){
  switch(action.type){
    case UPDATE_CURRENT_PAGE : {
      return action.payload
    }
    default: return state; 
  }
}