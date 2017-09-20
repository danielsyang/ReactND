import { GET_POST, UP_VOTE_POST, DOWN_VOTE_POST, DELETE_POST } from '../actions/PostAction';

function selectedPost(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case DELETE_POST:
        case GET_POST:
        case UP_VOTE_POST:
        case DOWN_VOTE_POST:
            return action.data;
        default:
            return state;
    }
}

export default selectedPost;