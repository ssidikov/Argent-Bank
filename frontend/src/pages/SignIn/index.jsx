import UserIcon from '../../assets/user-icon.svg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../app/userSlice'
import Form from '../../components/Form'
import './SignIn.sass'

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state) => state.user.loading)
  const error = useSelector((state) => state.user.error)
  const user = useSelector((state) => state.user.user)

  const handleSignIn = (username, password) => {
    return dispatch(login({ email: username, password }))
  }

  const handleSuccess = () => {
    navigate('/profile')
  }

  useEffect(() => {
    if (user) {
      navigate('/profile')
    }
  }, [user, navigate])

  return (
    <main className='sign-in'>
      <section className='sign-in__content'>
        <img src={UserIcon} alt='User Icon' className='sign-in__icon' />
        <h1 className='sign-in__title'>Sign In</h1>
        <Form
          firstInput='Username'
          secondInput='Password'
          checkbox='remember-me'
          onSubmit={handleSignIn}
          onSuccess={handleSuccess}
        />
        {loading && <p className='sign-in__loading'>Loading...</p>}
        {error && <p className='sign-in__error'>Username/password incorrect</p>}
      </section>
    </main>
  )
}
