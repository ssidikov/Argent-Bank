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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSignOut = () => {
    dispatch(logout())
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    if (user?.body?.firstName) {
      setFirstName(user.body.firstName)
    }
  }, [user])

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <NavLink to='/' className='header__logo-link'>
            <img src={Logo} alt='Argent Bank' className='header__logo-img' />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`header__mobile-toggle ${
            isMobileMenuOpen ? 'header__mobile-toggle--active' : ''
          }`}
          onClick={toggleMobileMenu}
          aria-label='Toggle navigation menu'>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--mobile-open' : ''}`}>
          {isAuthenticated ? (
            <div className='header__nav-authenticated'>
              <NavLink
                to='/profile'
                className='header__nav-item header__nav-item--profile'
                onClick={() => setIsMobileMenuOpen(false)}>
                <div className='header__avatar'>
                  <img src={userIcon} alt='User Avatar' className='header__avatar-img' />
                </div>
                <span className='header__nav-text'>Hello, {firstName}</span>
              </NavLink>
              <button onClick={handleSignOut} className='header__nav-item header__nav-item--button'>
                <img src={signOutIcon} alt='Sign Out' className='header__nav-icon' />
                <span className='header__nav-text'>Sign Out</span>
              </button>
            </div>
          ) : (
            <div className='header__nav-guest'>
              <NavLink
                to='/login'
                className='header__nav-item header__nav-item--signin'
                onClick={() => setIsMobileMenuOpen(false)}>
                <img src={userIcon} alt='Sign In' className='header__nav-icon' />
                <span className='header__nav-text'>Sign In</span>
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
