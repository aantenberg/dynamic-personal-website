import React, { connect } from 'react-redux'
import { useState } from 'react'
import { setHeader } from '../actions/setHeader'

const HeaderEditor = ({
  isEditing, setIsEditing, dispatchSetHeader, header,
}) => {
  const [imageURL, setImageURL] = useState(header.imageURL)
  const [description, setDescription] = useState(header.description)

  const eventListener = () => {
    setIsEditing(!isEditing)
    dispatchSetHeader({ imageURL, description }) // 0.060 0.174-0.039
  }

  return (
    <>
      <div>
        <p style={{ paddingTop: 20 }}>Image</p>
        <input className="grey-border" placeholder="Enter Image URL" onChange={e => setImageURL(e.target.value)} defaultValue={header.imageURL} />
        <p style={{ paddingTop: 20 }}>Description</p>
        <input className="grey-border" placeholder="Enter Description" onChange={e => setDescription(e.target.value)} defaultValue={header.description} />
      </div>
      <div>
        <button type="button" className="btn btn-primary" style={{ marginRight: 10, marginTop: 10 }} onClick={() => eventListener()}>Save</button>
        <button type="button" className="btn btn-danger" style={{ marginRight: 10, marginTop: 10 }} onClick={() => setIsEditing(!isEditing)}>Cancel</button>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchSetHeader: ({ imageURL, description }) => dispatch(setHeader({ imageURL, description })),
})

const mapStateToProps = state => ({
  header: state.header,
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderEditor)
