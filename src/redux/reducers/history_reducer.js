
import {UPDATE_SEARCH_HISTORY} from '../actions/state_actions'
export default function update_history(state = [], action){
  switch (action.type){
    case UPDATE_SEARCH_HISTORY: {
      return [action.payload, ...state.slice(0, 30)];
    }
    default: return state; 
  }
}