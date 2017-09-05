import * as CategoryAPI from '../services/category';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = data => {    
    return {
        type: LOAD_CATEGORIES,
        data,
    }
}

export const fetchCategories = () => dispatch => (
    CategoryAPI
        .get()
        .then(res => res.json())
        .then(data => dispatch(loadCategories(data.categories)))
)
