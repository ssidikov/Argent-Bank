import './Home.sass'
import Hero from '../../components/Hero'
import Feature from '../../components/Feature'
import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'

export default function Home() {
  return (
    <main className='home'>
      <Hero />
      
      {/* Features Section */}
      <section className='home__features'>
        <div className='home__features-container'>
          <div className='home__features-header'>
            <span className='home__features-badge'>Why Choose Us</span>
            <h2 className='home__features-title'>
              Banking <span className='home__features-title--accent'>redefined</span>
            </h2>
            <p className='home__features-subtitle'>
              Experience the next generation of banking with innovative features 
              designed to make your financial life easier and more secure.
            </p>
          </div>
          
          <div className='home__features-grid'>
            <Feature
              picture={chat}
              title='24/7 Customer Support'
              text='Get instant help through our AI-powered chat or speak with our expert representatives anytime, anywhere.'
              delay={100}
            />
            <Feature
              picture={money}
              title='Smart Savings'
              text='Maximize your earnings with our intelligent savings algorithm that automatically optimizes your interest rates.'
              delay={200}
            />
            <Feature
              picture={security}
              title='Bank-Grade Security'
              text='Your money and data are protected by military-grade encryption and biometric authentication.'
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='home__stats'>
        <div className='home__stats-container'>
          <div className='home__stats-grid'>
            <div className='home__stat'>
              <div className='home__stat-number'>500K+</div>
              <div className='home__stat-label'>Happy Customers</div>
            </div>
            <div className='home__stat'>
              <div className='home__stat-number'>$2.5B</div>
              <div className='home__stat-label'>Assets Under Management</div>
            </div>
            <div className='home__stat'>
              <div className='home__stat-number'>99.9%</div>
              <div className='home__stat-label'>Uptime Guarantee</div>
            </div>
            <div className='home__stat'>
              <div className='home__stat-number'>4.9★</div>
              <div className='home__stat-label'>Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='home__cta'>
        <div className='home__cta-container'>
          <div className='home__cta-content'>
            <h2 className='home__cta-title'>
              Ready to start your journey?
            </h2>
            <p className='home__cta-subtitle'>
              Join thousands of satisfied customers who have already transformed their banking experience.
            </p>
            <div className='home__cta-actions'>
              <button className='home__cta-primary'>
                Open Account Today
                <span className='home__cta-icon'>✨</span>
              </button>
              <button className='home__cta-secondary'>
                Schedule a Demo
              </button>
            </div>
          </div>
          <div className='home__cta-visual'>
            <div className='home__cta-badge'>
              <span className='home__cta-badge-text'>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
