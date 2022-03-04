export const EDIT_POST = 'EDIT_POST'
export const editPost = ({
  id, imageURL, title, text,
}) => ({
  type: EDIT_POST,
  id,
  imageURL,
  title,
  text,
})
