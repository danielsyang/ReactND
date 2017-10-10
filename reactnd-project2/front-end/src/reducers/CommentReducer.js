import { LOAD_COMMENTS_POST, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from '../actions/CommentAction';

function comment(state = [], action) {
    console.log('asdasdas');
    switch (action.type) {

        case CREATE_COMMENT:
            return state.concat(action.data);
        case UP_VOTE_COMMENT:
        case DOWN_VOTE_COMMENT:
            return state.map(elem => {
                if (elem.id === action.data.id) {
                    return action.data;
                }
                return elem;
            });
        case DELETE_COMMENT:
            return state.filter(elem => (
                action.data.id !== elem.id
            ));
        case LOAD_COMMENTS_POST:
            return action.data;
        case EDIT_COMMENT:
            return state.map(elem => {
                if (elem.id === action.data.id) {
                    return action.data;
                }
                return elem;
            });
        default:
            return state;
    }
}

export default comment;