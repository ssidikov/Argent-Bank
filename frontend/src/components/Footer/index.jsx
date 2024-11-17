import './Footer.sass'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <p className='footer-text'>Copyright {currentYear} Argent Bank</p>
    </footer>
  )
}

export default Footer
