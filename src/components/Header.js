import React, { useState } from 'react'
import { connect } from 'react-redux'
import HeaderEditor from './HeaderEditor'

const Header = ({ header }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { imageURL, description } = header
  return (
    <div id="greyback">
      <h1 id="greeting">Hey, this is me!</h1>
      {isEditing ? <HeaderEditor isEditing={isEditing} setIsEditing={setIsEditing} />
        : (
          <>
            <button type="button" className="btn btn-primary" id="edit-header" onClick={() => setIsEditing(!isEditing)}>Edit</button>
            <div>
              {imageURL !== '' ? <img src={imageURL} id="header-img" alt="Header Image" /> : <></>}
              <div id="header-desc">{description}</div>
            </div>
          </>
        )}
    </div>
  )
}

const mapStateToProps = state => ({ header: state.header })

export default connect(mapStateToProps)(Header)
