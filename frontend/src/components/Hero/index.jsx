import './Hero.sass'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__overlay'></div>
      <div className='hero__container'>
        <div className='hero__left'>
          <div className='hero__badge'>
            <span>✨ Trusted by 10,000+ customers</span>
          </div>

          <h1 className='hero__title'>
            Your trusted
            <span className='hero__title--gradient'> financial</span>
            <br />
            partner for life
          </h1>

          <p className='hero__subtitle'>
            Experience modern banking with no hidden fees, competitive rates, and 24/7 security.
            Join thousands who trust us with their financial future.
          </p>

          <div className='hero__stats'>
            <div className='hero__stat'>
              <span className='hero__stat-number'>$2.5B+</span>
              <span className='hero__stat-label'>Assets secured</span>
            </div>
            <div className='hero__stat'>
              <span className='hero__stat-number'>10K+</span>
              <span className='hero__stat-label'>Happy customers</span>
            </div>
            <div className='hero__stat'>
              <span className='hero__stat-number'>99.9%</span>
              <span className='hero__stat-label'>Uptime guarantee</span>
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
          </div>
          <div className='hero__actions'>
            <button className='hero__cta-primary'>
              Open Account Today
              <span className='hero__cta-icon'>→</span>
            </button>
          </div>

          <div className='hero__trust'>
            <span className='hero__trust-text'>Trusted by leading organizations</span>
            <div className='hero__trust-badges'>
              <div className='hero__trust-badge'>FDIC Insured</div>
              <div className='hero__trust-badge'>SOC 2 Certified</div>
              <div className='hero__trust-badge'>ISO 27001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
