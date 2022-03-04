export const DELETE_POST = 'DELETE_POST'
export const deletePost = ({ id }) => ({
  type: DELETE_POST,
  id,
})

export default deletePost
