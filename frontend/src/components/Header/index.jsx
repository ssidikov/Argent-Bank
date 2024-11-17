import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import userIcon from '../../assets/user-icon.svg'
import './Header.sass'

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <NavLink to='/' className='header__logo-link'>
          <img src={Logo} alt='Argent-bank' className='header__logo-img' />
        </NavLink>
      </div>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <NavLink to='/login' className='header__nav-link'>
              <img src={userIcon} alt='user' className='header__nav-link-icon'></img>
              <p>Sign In</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
