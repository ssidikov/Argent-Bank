import './Feature.sass'

export default function Feature({ picture, title, text }) {
  return (
    <div className='feature'>
      <img src={picture} alt={`${title} Icon`} className='feature__icon' />
      <h3 className='feature__title'>{title}</h3>
      <p className='feature__text'>{text}</p>
    </div>
  )
}
