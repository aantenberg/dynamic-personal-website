import { connect } from 'react-redux'
import React, { useState } from 'react'
import Post from './Post'
import NewPost from './NewPost'

const Posts = ({ posts }) => {
  const [isWritingPost, setIsWritingPost] = useState(false)
  return (
    <div id="posts-area">
      <button type="button" className="btn btn-primary" style={{ margin: 20 }} onClick={() => setIsWritingPost(!isWritingPost)}>Add Post</button>
      <h1 id="posts-title">Blog Posts</h1>
      {posts.map(post => <Post index={posts.indexOf(post)} key={post.id} post={post} />)}
      {isWritingPost ? <NewPost isWritingPost={isWritingPost} setIsWritingPost={setIsWritingPost} /> : <></>}
    </div>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(Posts)
