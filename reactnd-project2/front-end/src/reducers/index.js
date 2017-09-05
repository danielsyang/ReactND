import { combineReducers } from 'redux'
import category from './CategoryReducer';

export default combineReducers({
    categories: category,
})