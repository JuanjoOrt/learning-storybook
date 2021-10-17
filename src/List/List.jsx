import './styles.css'
const img = 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'

export default function List ({ items = [], onClick }) {
  return <div className='list'>
      {items.map((item, index) => {
        const isLastItem = items.length - 1 === index
        return <div key={index}>
          <div className='list-item' onClick={() => onClick(item)}>
            <img className='list-image' src={img} alt="imagen de prefil" />
            <div className='list-name'>{item.name}</div>
            <div className='list-description'>{item.description}</div>
          </div>
          { !isLastItem && <hr />}
        </div>
      })}
  </div>
}
