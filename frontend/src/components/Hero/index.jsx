import './Hero.sass'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__overlay'></div>
      <div className='hero__container'>
        <div className='hero__left'>          <div className='hero__badge'>
            <span>✨ Your Banking Partner</span>
          </div>

          <h1 className='hero__title'>
            Welcome to
            <span className='hero__title--gradient'> Argent</span>
            <br />
            Bank
          </h1>

          <p className='hero__subtitle'>
            Experience modern banking with transparent services, competitive rates, and reliable security.
            Join our community of satisfied customers.
          </p>

          <div className='hero__stats'>
            <div className='hero__stat'>
              <span className='hero__stat-number'>Secure</span>
              <span className='hero__stat-label'>Banking Solutions</span>
            </div>
            <div className='hero__stat'>
              <span className='hero__stat-number'>24/7</span>
              <span className='hero__stat-label'>Customer Support</span>
            </div>
            <div className='hero__stat'>
              <span className='hero__stat-number'>Fast</span>
              <span className='hero__stat-label'>Service Delivery</span>
            </div>
          </div>
        </div>

        <div className='hero__right'>
          <div className='hero__features'>
            <div className='hero__feature'>
              <span className='hero__feature-icon'>🛡️</span>
              <div className='hero__feature-content'>
                <span className='hero__feature-title'>Bank-level Security</span>
                <span className='hero__feature-text'>256-bit encryption</span>
              </div>
            </div>
            <div className='hero__feature'>
              <span className='hero__feature-icon'>⚡</span>
              <div className='hero__feature-content'>
                <span className='hero__feature-title'>Instant Transfers</span>
                <span className='hero__feature-text'>Real-time processing</span>
              </div>
            </div>
            <div className='hero__feature'>
              <span className='hero__feature-icon'>💰</span>
              <div className='hero__feature-content'>
                <span className='hero__feature-title'>Zero Fees</span>
                <span className='hero__feature-text'>No hidden charges</span>
              </div>
            </div>
          </div>          <div className='hero__actions'>
            <button className='hero__cta-primary'>
              Get Started
              <span className='hero__cta-icon'>→</span>
            </button>
          </div>

          <div className='hero__trust'>
            <span className='hero__trust-text'>Reliable banking services</span>
            <div className='hero__trust-badges'>
              <div className='hero__trust-badge'>Secure</div>
              <div className='hero__trust-badge'>Verified</div>
              <div className='hero__trust-badge'>Professional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
