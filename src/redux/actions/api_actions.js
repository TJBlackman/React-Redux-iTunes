
export const QUERY_ITUNES = '[api] QUERY_ITUNES';
export function query_itunes_action(obj){
  return {
    type: QUERY_ITUNES,
    payload: obj
  }
}

export const QUERY_API_SUCCESS = '[api] QUERY_API_SUCCESS';
export function query_api_success_action(results){
  return {
    type: QUERY_API_SUCCESS,
    payload: results
  }
}

export const QUERY_API_FAILED = '[api] QUERY_API_FAILED';
export function query_api_error_action(err){
  return {
    type: QUERY_API_FAILED,
    payload: err
  }
}
