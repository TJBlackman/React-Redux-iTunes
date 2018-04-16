// Nav, menu
export const NAV_CLICKED = '[user] NAV_CLICKED';
export function nav_was_clicked(value){
  return {
    type: NAV_CLICKED,
    payload: value
  }
}

// form media type changed
export const FORM_MEDIA_TYPE_CHANGED = '[user] FORM_MEDIA_TYPE_CHANGED';
export function form_media_type_changed_action(value){
  return {
    type: FORM_MEDIA_TYPE_CHANGED,
    payload: value
  }
}

// submit form 
export const FORM_SUBMITTED = '[user] FORM_SUBMITTED';
export function submit_form_action(obj){
  return {
    type: FORM_SUBMITTED,
    payload: obj
  }
}

// click previous search
export const HISTORY_ITEM_CLICKED = '[user] HISTORY_ITEM_CLICKED';
export function history_item_cliked_action(id){
  return { 
    type: HISTORY_ITEM_CLICKED,
    payload: id
  }
}

// change page up
export const INCREMENT_PAGE_NUMBER = '[user] INCREMENT_PAGE_NUMBER';
export function increment_page_number_action(){
  return { type: INCREMENT_PAGE_NUMBER };
}

// change page down
export const DECREMENT_PAGE_NUMBER = '[user] DECREMENT_PAGE_NUMBER';
export function decrement_page_number_action(){
  return { type: DECREMENT_PAGE_NUMBER }; 
}

export const WATCH_VIDEO_PREVIEW = '[user] CLICK_VIDEO_PREVIEW_BTN';
export function watch_video_preview_action(videoSrc){
  return { 
    type: WATCH_VIDEO_PREVIEW,
    payload: videoSrc
  }
}