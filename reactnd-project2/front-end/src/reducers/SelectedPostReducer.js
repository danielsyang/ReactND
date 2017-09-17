import { GET_POST, UP_VOTE_POST } from '../actions/PostAction';

function selectedPost(state = {}, action) {
    switch (action.type) {
        case GET_POST:
            return action.data;
        case UP_VOTE_POST:
            return action.data;
        default:
            return state;
    }
}

export default selectedPost;