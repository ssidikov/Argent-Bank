import { Link } from 'react-router-dom'
import './ErrorMessage.sass'

function ErrorMessage() {
  return (
    <section className='error-message'>
      <h1 className='error-message__number'>404</h1>
      <p className='error-message__text'>Oops! The page you requested does not exist.</p>
      <Link to='/' className='error-message__link'>
        Return to the home page
      </Link>
    </section>
  )
}

export default ErrorMessage
