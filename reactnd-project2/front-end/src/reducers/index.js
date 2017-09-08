import { combineReducers } from 'redux'
import category from './CategoryReducer';
import post from './PostReducer';

export default combineReducers({
    categories: category,
    posts: post,
})