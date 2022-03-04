import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/addPost'

const NewPost = ({ isWritingPost, setIsWritingPost, dispatchAddPost }) => {
  const [title, setTitle] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [text, setText] = useState('')

  const eventListener = () => {
    dispatchAddPost({ imageURL, title, text })
    setIsWritingPost(!isWritingPost)
  }
  return (
    <div className="modal-container">
      <div className="my-modal">
        <h2>New Post</h2>
        <div>
          <p style={{ paddingTop: 20 }}>Title</p>
          <input className="grey-border" placeholder="Title" onChange={e => setTitle(e.target.value)} />
          <p style={{ paddingTop: 20 }}>Image</p>
          <input className="grey-border" placeholder="Enter Image URL" onChange={e => setImageURL(e.target.value)} />
          <p style={{ paddingTop: 20 }}>Description</p>
          <input className="grey-border" placeholder="Enter Description" onChange={e => setText(e.target.value)} />
        </div>
        <div style={{ paddingTop: 20 }}>
          <button type="button" className="btn btn-primary" style={{ marginRight: 10, marginTop: 10 }} onClick={() => eventListener()}>Save</button>
          <button type="button" className="btn btn-danger" style={{ marginRight: 10, marginTop: 10 }} onClick={() => setIsWritingPost(!isWritingPost)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: ({ imageURL, title, text }) => dispatch(addPost({ imageURL, title, text })),
})

export default connect(null, mapDispatchToProps)(NewPost)
