import React from 'react'

const PostView = ({
  imageURL, id, title, text, setIsEditingPost,
}) => (
  <>
    <img src={imageURL} style={{ width: '300px', paddingBottom: '20px' }} alt="Post Image" />
    <br />
    <h4>{`Post #${id}: ${title}`}</h4>
    <br />
    <p>{ text }</p>
    <button type="button" id="button" className="btn btn-warning" onClick={() => setIsEditingPost(true)}>Edit</button>
  </>
)

export default PostView
