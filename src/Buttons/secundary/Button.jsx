import './styles.css'

export default function Button ({ children, onClick, className }) {
  return (
        <button className={`button-secundary ${className}`} onClick={onClick}>
            {children}
        </button>
  )
}
