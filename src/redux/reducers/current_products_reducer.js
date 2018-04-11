
import { UPDATE_CUR_PRODUCTS } from '../actions/state_actions';
export default function current_products_reducer(state = [], action){
  switch (action.type){
    case UPDATE_CUR_PRODUCTS: return [...action.payload]
    default: return state; 
  }
}