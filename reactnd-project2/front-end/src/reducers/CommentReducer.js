import { LOAD_COMMENTS_POST, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, CREATE_COMMENT } from '../actions/CommentAction';

function comment(state = [], action) {    
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
        case LOAD_COMMENTS_POST:
            return action.data;
        default:
            return state;
    }
}

export default comment;