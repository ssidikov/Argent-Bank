import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateUserName } from '../../app/userSlice'
import './ProfileEditForm.sass'

function ProfileEditForm({ firstName, lastName, onSave }) {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [newFirstName, setNewFirstName] = useState(firstName)
  const [newLastName, setNewLastName] = useState(lastName)

  const handleEditName = () => {
    setIsEditing(true)
  }

  const handleSaveName = () => {
    dispatch(updateUserName({ firstName: newFirstName, lastName: newLastName }))
      .unwrap()
      .then(() => {
        onSave(newFirstName, newLastName)
        setIsEditing(false)
      })
      .catch((error) => {
        console.error('Failed to update name:', error)
      })
  }

  return (
    <React.Fragment>
      {!isEditing ? (
        <button className='profile__edit-button' onClick={handleEditName}>
          Edit Name
        </button>
      ) : (
        <div className='profile__edit-form'>
          <div className='profile__edit-inputs'>
            <input
              type='text'
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              placeholder='First Name'
              className='profile__input'
            />
            <input
              type='text'
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              placeholder='Last Name'
              className='profile__input'
            />
          </div>
          <div className='profile__edit-actions'>
            <button className='profile__save-button' onClick={handleSaveName}>
              Save
            </button>
            <button className='profile__cancel-button' onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default ProfileEditForm

ProfileEditForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onSave: PropTypes.func.isRequired,
}
