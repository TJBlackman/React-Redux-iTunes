import { UPDATE_ACTIVE_MEDIA } from '../actions/state_actions';

export function update_active_media_reducer(state = 'music', action){
  switch(action.type){
    case UPDATE_ACTIVE_MEDIA: return action.payload

    default: return state; 
  }
}