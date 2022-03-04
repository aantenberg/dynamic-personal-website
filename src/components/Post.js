import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions/editPost'
import { deletePost } from '../actions/deletePost'
import PostView from './PostView'

const Post = ({
  dispatchEditPost, dispatchDeletePost, index, post,
}) => {
  const {
    id, imageURL, title, text,
  } = post
  const [isEditingPost, setIsEditingPost] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedImageURL, setEditedImageURL] = useState(imageURL)
  const [editedText, setEditedText] = useState(text)

  const saveAndClose = () => {
    dispatchEditPost({
      id, imageURL: editedImageURL, title: editedTitle, text: editedText,
    })
    setIsEditingPost(!isEditingPost)
  }

  const deleteAndClose = () => {
    dispatchDeletePost({ id })
    setIsEditingPost(!isEditingPost)
  }
  return (
    <div className="post">
      { !isEditingPost
        ? <PostView imageURL={imageURL} id={id} title={title} text={text} setIsEditingPost={setIsEditingPost} />
        : (
          <>
            <div>
              <p style={{ paddingTop: 20 }}>Title</p>
              <input className="grey-border" placeholder="Title" defaultValue={title} onChange={e => setEditedTitle(e.target.value)} />
              <p style={{ paddingTop: 20 }}>Image</p>
              <input className="grey-border" placeholder="Enter Image URL" defaultValue={imageURL} onChange={e => setEditedImageURL(e.target.value)} />
              <p style={{ paddingTop: 20 }}>Description</p>
              <input className="grey-border" placeholder="Enter Description" defaultValue={text} onChange={e => setEditedText(e.target.value)} />
            </div>
            <div style={{ paddingTop: 20 }}>
              <button type="button" className="btn btn-primary" style={{ marginRight: 10, marginTop: 10 }} onClick={() => saveAndClose()}>Save</button>
              <button type="button" className="btn btn-warning" style={{ marginRight: 10, marginTop: 10 }} onClick={() => setIsEditingPost(!isEditingPost)}>Cancel</button>
              <button type="button" className="btn btn-danger" style={{ marginRight: 10, marginTop: 10 }} onClick={() => deleteAndClose()}>Delete Post</button>
            </div>
          </>
        )}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: ({
    id, imageURL, title, text,
  }) => dispatch(editPost({
    id, imageURL, title, text,
  })),
  dispatchDeletePost: ({ id }) => dispatch(deletePost({ id })),
})

export default connect(null, mapDispatchToProps)(Post)
