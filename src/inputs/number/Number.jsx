
import './styles.css'

export default function Number ({ onChange, placeHolder, className }) {
  return (
        <input type="number" className={`input-text ${className}`} onChange={(e) => onChange(e.target.value)} placeholder={placeHolder}/>
  )
}
