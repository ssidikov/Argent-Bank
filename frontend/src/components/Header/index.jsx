import './Header.sass'
import Logo from '../../assets/logo.png'
import userIcon from '../../assets/user-icon.svg'
import signOutIcon from '../../assets/signOut.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../app/userSlice'

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const isAuthenticated = Boolean(useSelector((state) => state.user.token))
  const [firstName, setFirstName] = useState('')

  const handleSignOut = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (user?.body?.firstName) {
      setFirstName(user.body.firstName)
    }
  }, [user])

  return (
    <header className='header'>
      <div className='header__logo'>
        <NavLink to='/' className='header__logo-link'>
          <img src={Logo} alt='Argent Bank' className='header__logo-img' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
      </div>
      <nav className='header__nav'>
        {isAuthenticated ? (
          <>
            <NavLink to='/profile' className='header__nav-link'>
              <img src={userIcon} alt='User Icon' className='header__nav-link-icon' />
              <span className='header__nav-text'>{firstName}</span>
            </NavLink>
            <NavLink to='/' onClick={handleSignOut} className='header__nav-link'>
              <img src={signOutIcon} alt='Sign Out Icon' className='header__nav-link-icon' />
              <span className='header__nav-text'>Sign Out</span>
            </NavLink>
          </>
        ) : (
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <NavLink to='/login' className='header__nav-link'>
                <img src={userIcon} alt='Sign In Icon' className='header__nav-link-icon' />
                <p className='header__nav-text'>Sign In</p>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
