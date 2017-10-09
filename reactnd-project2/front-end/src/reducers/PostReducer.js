import { LOAD_POSTS, CREATE_POST } from '../actions/PostAction';

function post(state = [], action) {

    switch (action.type) {
        case LOAD_POSTS:
            return action.data.filter(post => {
                if (!post.deleted) return post;
            });
        case CREATE_POST:
            return state.concat(action.data);
        default:
            return state;
    }
}

export default post;