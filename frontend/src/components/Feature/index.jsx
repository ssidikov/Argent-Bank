import './Feature.sass'
import PropTypes from 'prop-types'

export default function Feature({ picture, title, text, delay = 0 }) {
  return (
    <div className='feature' style={{ animationDelay: `${delay}ms` }}>
      <div className='feature__card'>
        <div className='feature__icon-wrapper'>
          <img src={picture} alt={`${title} Icon`} className='feature__icon' />
          <div className='feature__icon-bg'></div>
        </div>
        <div className='feature__content'>
          <h3 className='feature__title'>{title}</h3>
          <p className='feature__text'>{text}</p>
          <button className='feature__cta'>
            Learn More
            <span className='feature__cta-arrow'>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Feature.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
}
