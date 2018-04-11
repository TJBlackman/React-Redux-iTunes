import { createStore, applyMiddleware, compose } from 'redux';
import Root_Reducer from './reducers/index';
import promiseMiddleware from 'redux-promise';

import user_middleware_function from './middleware/user_middleware'
import api_middleware from './middleware/api_middleware'
import state_middleware from './middleware/state_middleware'


const Store_Default  = {
  media_types: [
    { value: "music",   display_text: "Music" },
    { value: "movie",   display_text: "Movies" },
    { value: "tvShow",  display_text: "TV Shows" },
    { value: "podcast", display_text: "Podcasts" }
  ],
  history: [],
  current_products: [],
  products_per_page: 10,
  current_page: 1,
  active_media_type: "music",
  show_page_type: "list",
  searching: false
  
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Root_Reducer, 
  Store_Default, 
  composeEnhancers(
    applyMiddleware(promiseMiddleware, user_middleware_function, api_middleware, state_middleware)
  )
);

export default store; 
