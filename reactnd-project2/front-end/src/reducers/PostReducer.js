import { LOAD_POSTS } from '../actions/PostAction';
import { initialState } from '../state';

function post(state = initialState.posts, action) {    
    switch (action.type) {
        case LOAD_POSTS:
            return action.data;
        default:
            return state;
    }
}

export default post;