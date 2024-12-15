import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Profile.sass'
import Account from '../../components/Account'
import ProfileEditForm from '../../components/ProfileEditForm'
import { fetchUserProfile } from '../../app/userSlice'
import { getUserAccounts } from '../../api/api'

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Redux state
  const user = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.user.token)

  // Local states
  const [accounts, setAccounts] = useState([])
  const [loadingAccounts, setLoadingAccounts] = useState(true)
  const [error, setError] = useState(null)

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

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

  const handleNameUpdate = (newFirstName, newLastName) => {
    user.body.firstName = newFirstName
    user.body.lastName = newLastName
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
          {user.body.firstName} {user.body.lastName}!
        </h1>
        <ProfileEditForm
          firstName={user.body.firstName}
          lastName={user.body.lastName}
          onSave={handleNameUpdate}
        />
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {loadingAccounts && <p>Loading accounts...</p>}
      {error && <p>Error loading accounts: {error.message}</p>}
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

export default Profile
