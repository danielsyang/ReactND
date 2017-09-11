import * as CategoryAPI from '../services/category';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const fetchCategories = () => {
    return {
        type: LOAD_CATEGORIES,
        payload: CategoryAPI.getAll(),
    }
}
