import { SET_VIDEO_PREVIEW } from '../actions/state_actions';
export default function video_previe_url_reducer(state = null, action){
  switch(action.type){
    case SET_VIDEO_PREVIEW: {
      return action.payload; 
    }
    default: return state; 

  }
}