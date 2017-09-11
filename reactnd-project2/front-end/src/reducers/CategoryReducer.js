import { LOAD_CATEGORIES } from '../actions/CategoryAction';

function category(state = [], action) {

    switch (action.type) {
        case LOAD_CATEGORIES:
            return action.data;
        default:
            return state;
    }
}

export default category;