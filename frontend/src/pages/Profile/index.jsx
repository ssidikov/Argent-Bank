import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Profile.sass'
import Account from '../../components/Account'
import { fetchUserProfile, updateUserName } from '../../app/userSlice'
import { getUserAccounts } from '../../api/api'

export default function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Redux state
  const user = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.user.token)

  // Local states
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [accounts, setAccounts] = useState([])
  const [loadingAccounts, setLoadingAccounts] = useState(true)
  const [error, setError] = useState(null)

  // Redirect to login if user is not authenticated
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

  // Fetch user profile on token change
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token))
    }
  }, [dispatch, token])

  // Fetch user accounts
  useEffect(() => {
    if (user && token) {
      setLoadingAccounts(true)
      getUserAccounts(token, user.body.id)
        .then((data) => setAccounts(data))
        .catch((err) => setError(err))
        .finally(() => setLoadingAccounts(false))
    }
  }, [user, token])

  const handleEditName = () => {
    setIsEditing(true)
  }

  // Update user name
  const handleSaveName = () => {
    dispatch(updateUserName({ firstName: newFirstName, lastName: newLastName }))
      .unwrap()
      .then(() => {
        setFirstName(newFirstName)
        setLastName(newLastName)
        setIsEditing(false)
      })
      .catch((error) => {
        console.error('Failed to update name:', error)
      })
  }

  // Render nothing if user is not authenticated
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
      {loadingAccounts && <p>Loading accounts...</p>}
      {error && <p>Error loading accounts: {error}</p>}
      {!loadingAccounts &&
        accounts.map((account, index) => (
          <Account
            key={`userAccount-${index}`}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
    </main>
  )
}
