import Logo from '../../assets/logo.svg'
import './Footer.sass'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <img src={Logo} alt='Awesome-logo' className='footer-logo' />
      <div className='footer-right'>
        <p className='footer-text'>Developer Sardorbek SIDIKOV</p>
        <p className='footer-text'>&copy; {currentYear} Awesome-React. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
