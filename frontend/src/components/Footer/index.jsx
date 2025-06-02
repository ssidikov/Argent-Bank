import './Footer.sass'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__brand'>
            <h3 className='footer__brand-name'>Argent Bank</h3>
            <p className='footer__brand-tagline'>Banking made simple</p>
          </div>
          
          <div className='footer__links'>
            <div className='footer__link-group'>
              <h4 className='footer__link-title'>Products</h4>
              <ul className='footer__link-list'>
                <li><a href='#' className='footer__link'>Savings Account</a></li>
                <li><a href='#' className='footer__link'>Checking Account</a></li>
                <li><a href='#' className='footer__link'>Credit Cards</a></li>
                <li><a href='#' className='footer__link'>Loans</a></li>
              </ul>
            </div>
            
            <div className='footer__link-group'>
              <h4 className='footer__link-title'>Support</h4>
              <ul className='footer__link-list'>
                <li><a href='#' className='footer__link'>Help Center</a></li>
                <li><a href='#' className='footer__link'>Contact Us</a></li>
                <li><a href='#' className='footer__link'>Security</a></li>
                <li><a href='#' className='footer__link'>Privacy</a></li>
              </ul>
            </div>
            
            <div className='footer__link-group'>
              <h4 className='footer__link-title'>Company</h4>
              <ul className='footer__link-list'>
                <li><a href='#' className='footer__link'>About Us</a></li>
                <li><a href='#' className='footer__link'>Careers</a></li>
                <li><a href='#' className='footer__link'>Press</a></li>
                <li><a href='#' className='footer__link'>Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='footer__bottom'>
          <p className='footer__copyright'>
            © {currentYear} Argent Bank. All rights reserved.
          </p>
          <div className='footer__social'>
            <a href='#' className='footer__social-link' aria-label='Twitter'>
              <span>🐦</span>
            </a>
            <a href='#' className='footer__social-link' aria-label='LinkedIn'>
              <span>💼</span>
            </a>
            <a href='#' className='footer__social-link' aria-label='Facebook'>
              <span>📘</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
