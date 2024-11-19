import UserIcon from '../../assets/user-icon.svg'
import './LoginForm.sass'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <section className='login-container'>
      <img src={UserIcon} alt='User Icon' className='login-icon' />
      <h1 className='login-title'>Sign In</h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='email'>Username</label>
          <input type='email' id='email' name='email' />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me'></input>
          <label for='remember-me'>Remember me</label>
        </div>
        <Link to='/profile'>
          <button type='submit' className='login-button'>
            Sign In
          </button>
        </Link>
      </form>
    </section>
  )
}

export default LoginForm
