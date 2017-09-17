import { combineReducers } from 'redux'
import category from './CategoryReducer';
import post from './PostReducer';
import selectedPost from './SelectedPostReducer';
import comment from './CommentReducer';

export default combineReducers({
    categories: category,
    posts: post,
    selectedPost: selectedPost,
    postComments:  comment,
})