import * as PostAPI from '../services/post';

export const LOAD_POSTS = 'LOAD_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
export const DELETE_POST = 'DELETE_POST';

export const loadPosts = data => {
    return {
        type: LOAD_POSTS,
        data,
    }
};

export const createPost = data => {
    return {
        type: CREATE_POST,
        data,
    }
};

export const getPost = data => {
    return {
        type: GET_POST,
        data,
    }
};

export const upVotePost = data => {
    return {
        type: UP_VOTE_POST,
        data,
    }
};

export const downVotePost = data => {
    return {
        type: DOWN_VOTE_POST,
        data,
    }
};

export const deletePost = data => {
    return {
        type: DELETE_POST,
        data,
    }
}

export const fetchPostsThunk = () => dispatch => (
    PostAPI
        .get()
        .then(res => res.json())
        .then(data => dispatch(loadPosts(data)))
);

export const createPostThunk = post => dispatch => (
    PostAPI
        .createPost(post)
        .then(res => res.json())
        .then(data => dispatch(createPost(data)))
);

export const getPostThunk = id => dispatch => (
    PostAPI
        .getPost(id)
        .then(res => res.json())
        .then(data => dispatch(getPost(data)))
);

export const fetchPostCategoryThunk = cat => dispatch => (
    PostAPI
        .getPostCategory(cat)
        .then(res => res.json())
        .then(data => dispatch(loadPosts(data)))
);

export const upVotePostThunk = id => dispatch => (
    PostAPI
        .upVotePost(id)
        .then(res => res.json())
        .then(data => dispatch(upVotePost(data)))
);

export const downVotePostThunk = id => dispatch => (
    PostAPI
        .downVotePost(id)
        .then(res => res.json())
        .then(data => dispatch(downVotePost(data)))
);

export const deletePostThunk = id => dispatch => (
    PostAPI
        .deletePost(id)
        .then(res => res.json())
        .then(data => dispatch(deletePost(data)))
)