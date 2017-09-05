import { LOAD_CATEGORIES } from '../actions/CategoryAction';
import { initialState } from '../state';

function category(state = initialState.categories, action) {    
    switch (action.type) {
        case LOAD_CATEGORIES:
            return {
                categories: action.data,
            };
        default:
            return state;
    }
}

export default category;