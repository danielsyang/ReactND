import * as CategoryAPI from '../services/category';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const fetchCategories = (data) => {
    return {
        type: LOAD_CATEGORIES,
        data,
    }
}

export const fetchCategoriesThunk = () => dispatch => {
    CategoryAPI.getAll()
        .then(data => dispatch(fetchCategories(data)))
}