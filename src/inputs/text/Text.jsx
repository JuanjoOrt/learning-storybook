
import './styles.css'

export default function Text ({ onChange, placeHolder, className }) {
  return (
        <input type="text" className={`input-text ${className}`} onChange={(e) => onChange(e.target.value)} placeholder={placeHolder}/>
  )
}
