import { ADD_POST } from '../actions/addPost'
import { DELETE_POST } from '../actions/deletePost'
import { EDIT_POST } from '../actions/editPost'

const default_state = []
const posts = (state = default_state, action) => {
  const {
    type, id, title, imageURL, text,
  } = action
  switch (type) {
    case ADD_POST:
      return [...state, {
        id, title, imageURL, text,
      }]
    case EDIT_POST:
      return state.map(post => (post.id === id ? {
        id, title, imageURL, text,
      } : post))
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default posts
