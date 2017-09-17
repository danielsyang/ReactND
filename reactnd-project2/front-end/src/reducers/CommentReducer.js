import { LOAD_COMMENTS_POST } from '../actions/CommentAction';

function comment(state = [], action) {
    switch(action.type) {
        case LOAD_COMMENTS_POST:
            return action.data;
        default:
            return state;
    }
}

export default comment;