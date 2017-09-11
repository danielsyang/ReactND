import { LOAD_POSTS, CREATE_POST, GET_POST } from '../actions/PostAction';
import { initialState } from '../state';

function post(state = initialState.posts, action) {

    switch (action.type) {
        case LOAD_POSTS:
            return action.data;
        case CREATE_POST:
            return action.data;
        case GET_POST:
            console.log(action);
            return action.data;
        default:
            return state;
    }
}

export default post;