import { SET_HEADER } from '../actions/setHeader'

const default_state = { imageURL: '', description: '' }

const header = (state = default_state, action) => {
  const { type, imageURL, description } = action
  switch (type) {
    case SET_HEADER:
      return { imageURL, description }
    default:
      return state
  }
}

export default header
