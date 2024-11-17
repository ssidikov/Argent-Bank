import './Hero.sass'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <h2 className='sr-only'>Promoted Content</h2>
        <p className='hero__subtitle'>No fees.</p>
        <p className='hero__subtitle'>No minimum deposit.</p>
        <p className='hero__subtitle'>High interest rates.</p>
        <p className='hero__text'>Open a savings account with Argent Bank today!</p>
      </div>
    </section>
  )
}

export default Hero
