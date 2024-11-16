import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Header.sass'

function Header() {
  return (
    <header className='header'>
      <div className='header-logo'>
        <NavLink to='/'>
          <img src={Logo} alt='Awesome-logo' className='header-logo__img' />
        </NavLink>
      </div>
      <nav className='header-nav'>
        <ul>
          <li>
            <NavLink to='/login'>Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
