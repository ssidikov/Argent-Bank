import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
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
            <NavLink to='/'>Main</NavLink>
          </li>
          <li>
            <NavLink to='/About'>About us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
