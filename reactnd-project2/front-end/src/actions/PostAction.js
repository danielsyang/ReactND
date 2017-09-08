import * as PostAPI from '../services/post';

export const LOAD_POSTS = 'LOAD_POSTS';

export const loadPosts = data => {    
    return {
        type: LOAD_POSTS,
        data,
    }
}

export const fetchPosts = () => dispatch => (
    PostAPI
        .get()
        .then(res => res.json())
        .then(data => dispatch(loadPosts(data)))
)
