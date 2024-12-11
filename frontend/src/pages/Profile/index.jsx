// index.jsx
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Profile.sass'
import Account from '../../components/Accaunt'
import accounts from '../../data/accounts.json'
import { fetchUserProfile, updateUserName } from '../../app/userSlice'

export default function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.user.token)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  useEffect(() => {
    if (user && user.body.firstName) {
      setFirstName(user.body.firstName)
      setLastName(user.body.lastName)
      setNewFirstName(user.body.firstName)
      setNewLastName(user.body.lastName)
    }
  }, [user])

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token))
    }
  }, [dispatch, token])

  const handleEditName = () => {
    setIsEditing(true)
  }

  const handleSaveName = () => {
    dispatch(
      updateUserName({ token, profileData: { firstName: newFirstName, lastName: newLastName } })
    )
    setIsEditing(false)
  }

  if (!user) {
    return null
  }

  return (
    <main className='profile'>
      <div className='profile__header'>
        <h1 className='profile__title'>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <button className='profile__edit-button' onClick={handleEditName}>
          Edit Name
        </button>
      </div>
      {isEditing && (
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
      <h2 className='sr-only'>Accounts</h2>
      {accounts.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  )
}
