import * as PostAPI from '../services/post';

export const LOAD_POSTS = 'LOAD_POSTS';
export const CREATE_POST = 'CREATE_POST';

export const loadPosts = data => {
    return {
        type: LOAD_POSTS,
        data,
    }
}

export const createPost = data => {
    return {
        type: CREATE_POST,
        data,
    }
};

export const fetchPosts = () => dispatch => (
    PostAPI
        .get()
        .then(res => res.json())
        .then(data => dispatch(loadPosts(data)))
);

export const createPostServer = post => dispatch => (
    PostAPI
        .createPost(post)
        .then(res => res.json())
        .then(data => dispatch(createPost(post)))
);
