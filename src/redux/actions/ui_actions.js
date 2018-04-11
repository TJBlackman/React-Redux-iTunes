export const SHOW_SPINNER = '[ui] SHOW_SPINNER'; 
export function show_spinner_action(){
  return {
    type: SHOW_SPINNER,
    payload: true
  }
}

export const HIDE_SPINNER = '[ui] HIDE_SPINNER'; 
export function hide_spinner_action(){
  return {
    type: HIDE_SPINNER,
    payload: false
  }
}