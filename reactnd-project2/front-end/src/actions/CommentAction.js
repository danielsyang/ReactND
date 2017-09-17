import * as CommentAPI from '../services/comment';

export const LOAD_COMMENTS_POST = 'LOAD_COMMENTS_POST';

export const fetchCommentsPost = (data) => {
    return {
        type: LOAD_COMMENTS_POST,
        data,
    }
}

export const fetchCommentsPostThunk = id => dispatch => {
    CommentAPI.getCommentPost(id)
        .then(data => dispatch(fetchCommentsPost(data)));
}