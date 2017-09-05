import { LOAD_CATEGORIES } from '../actions/CategoryAction';
import { initialState } from '../state';

function category(state = initialState, action) {    
    switch (action.type) {
        case LOAD_CATEGORIES:
            return {
                ...state,
                categories: action.data,
            };
        default:
            return state;
    }
}

export default category;