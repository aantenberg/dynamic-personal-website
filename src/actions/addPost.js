export const ADD_POST = 'ADD_POST'
let id = 1
export const addPost = ({ imageURL, title, text }) => ({
  type: ADD_POST,
  key: id,
  id: id++,
  imageURL,
  title,
  text,
})
