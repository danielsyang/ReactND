import { LOAD_POSTS, CREATE_POST } from '../actions/PostAction'

function post(state = [], action) {

  switch (action.type) {
    case LOAD_POSTS:
      return action.data.filter(post => (
        !post.deleted
      ))
    case CREATE_POST:
      return state.concat(action.data)
    default:
      return state
  }
}

export default post