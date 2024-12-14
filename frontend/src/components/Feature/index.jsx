import './Feature.sass'
import PropTypes from 'prop-types'

export default function Feature({ picture, title, text }) {
  return (
    <div className='feature'>
      <img src={picture} alt={`${title} Icon`} className='feature__icon' />
      <h3 className='feature__title'>{title}</h3>
      <p className='feature__text'>{text}</p>
    </div>
  )
}

Feature.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
