import './Features.sass'
import IconChat from '../../assets/icon-chat.png'
import IconMoney from '../../assets/icon-money.png'
import IconSecurity from '../../assets/icon-security.png'

function Features() {
  return (
    <section className='features'>
      <h2 class='sr-only'>Features</h2>
      <div className='features__item'>
        <img src={IconChat} alt='Chat Icon' className='features__item-icon' />
        <h3 className='features__item-title'>You are our #1 priority</h3>
        <p className='features__item-subtitle'>
          Need to talk to a representative? You can get in touch through our 24/7 chat or through a
          phone call in less than 5 minutes.
        </p>
      </div>
      <div className='features__item'>
        <img src={IconMoney} alt='Money Icon' className='features__item-icon' />
        <h3 className='features__item-title'>More savings means higher rates</h3>
        <p className='features__item-subtitle'>
          The more you save with us, the higher your interest rate will be!
        </p>
      </div>
      <div className='features__item'>
        <img src={IconSecurity} alt='Security Icon' className='features__item-icon' />
        <h3 className='features__item-title'>Security you can trust</h3>
        <p className='features__item-subtitle'>
          We use top of the line encryption to make sure your data and money is always safe.
        </p>
      </div>
    </section>
  )
}

export default Features
