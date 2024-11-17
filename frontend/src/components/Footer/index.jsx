import './Footer.sass'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <p className='footer-text'>&copy; {currentYear} Awesome-React. All rights reserved.</p>
    </footer>
  )
}

export default Footer
