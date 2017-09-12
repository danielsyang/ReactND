import { LOAD_POSTS, CREATE_POST, GET_POST } from '../actions/PostAction';

function post(state = [], action) {

    switch (action.type) {
        case LOAD_POSTS:
            return action.data;
        case CREATE_POST:
            return state.concat(action.data);
        case GET_POST:
        default:
            return state;
    }
}

export default post;