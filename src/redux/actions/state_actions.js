
// update active
export const UPDATE_ACTIVE_MEDIA = '[state] UPDATE_ACTIVE_MEDIA';
export function update_active_media(val){
  return {
    type: UPDATE_ACTIVE_MEDIA,
    payload: val
  }
}

// update current_products
export const UPDATE_CUR_PRODUCTS = '[state] UPDATE_CURRENT_PRODUCTS';
export function update_cur_pructs_action(array){
  return {
    type: UPDATE_CUR_PRODUCTS,
    payload: array
  }
}

// update search history 
export const UPDATE_SEARCH_HISTORY = '[state] UPDATE_SEARCH_HISTORY';
export function update_search_history_action(array){
  return {
    type: UPDATE_SEARCH_HISTORY,
    payload: array
  }
}

// update current page
export const UPDATE_CURRENT_PAGE = '[state] UPDATE_CURRENT_PAGE';
export function update_current_page_action(val){
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: val
  }
}

export const TOGGLE_SEARCH_SPINNER = '[state] TOGGLE_SEARCH_SPINNER';
export function toggle_search_spinner_action(bool){
  return {
    type: TOGGLE_SEARCH_SPINNER,
    payload: bool
  }
}

export const SET_VIDEO_PREVIEW = '[state] UPDATE_VIDEO_PREVIEW_URL'; 
export function set_video_preview_action(src){
  return {
    type: SET_VIDEO_PREVIEW,
    payload: src
  }
}