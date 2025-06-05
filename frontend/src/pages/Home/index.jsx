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
              title='You are our #1 priority'
              text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
              delay={100}
            />
            <Feature
              picture={money}
              title='More savings means higher rates'
              text='The more you save with us, the higher your interest rate will be!'
              delay={200}
            />
            <Feature
              picture={security}
              title='Security you can trust'
              text='We use top of the line encryption to make sure your data and money is always safe.'
              delay={300}
            />
          </div>
        </div>      </section>
    </main>
  )
}
