import './Account.sass'
import PropTypes from 'prop-types'

export default function Account({ title, amount, description }) {
  return (
    <section className='account'>
      <div className='account__content-wrapper'>
        <h3 className='account__title'>{title}</h3>
        <p className='account__amount'>${amount}</p>
        <p className='account__amount-description'>{description}</p>
      </div>
      <div className='account__content-wrapper account__cta'>
        <button className='account__transaction-button'>View transactions</button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
