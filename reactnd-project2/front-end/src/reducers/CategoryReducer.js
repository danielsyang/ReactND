import { LOAD_CATEGORIES } from '../actions/CategoryAction';

function category(state = [], action) {

    console.log(action);

    switch (action.type) {
        case LOAD_CATEGORIES:
        console.log(action.payload.categories);
        console.log(action.payload.data);
        console.log(action.payload);
            return action.payload.categories;
        default:
            return state;
    }
}

export default category;