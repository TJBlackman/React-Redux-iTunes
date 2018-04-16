import { combineReducers } from 'redux';
import { update_active_media_reducer } from '../reducers/state_reducer'
import current_products_reducer from './current_products_reducer';
import update_history from './history_reducer';
import current_page_reducer from './current_page_reducer';
import toggle_search_spinner from './searching_spinner_reducer';
import video_previe_url_reducer from './video_preview_url_reducer';
import toggle_modal_reducer from './toggle_modal_reducer'

const Root_Reducer = combineReducers({
    media_types: (state = {}) => state,
    history: update_history,
    current_products: current_products_reducer,
    products_per_page: (state = 10) => state,
    current_page: current_page_reducer,
    active_media_type: update_active_media_reducer,
    show_page_type: "list",
    searching: toggle_search_spinner,
    video_preview_url: video_previe_url_reducer,
    modal_is_showing: toggle_modal_reducer
});

export default Root_Reducer; 