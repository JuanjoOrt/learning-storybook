import './styles.css'
import Loader from './Loader'
const img = 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'

export default function Card ({ children, loading }) {
  return loading
    ? <Loader />
    : <div className='card'>
      <header>
          <img src={img} alt="Imagen de perfil" className='imagen'/>
      </header>
      <section>
        {children}
      </section>
  </div>
}
