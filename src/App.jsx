import List from './List/List'
import './App.css'

const items = [
  {
    name: 'esto es un nomnbre',
    description: 'Esto es una descripción de prueba lo suficientemente grande para probar un texto'
  },
  {
    name: 'esto es un nomnbre',
    description: 'Esto es una descripción de prueba lo suficientemente grande para probar un texto, lo suficientemente grande para probar un texto'
  },
  {
    name: 'esto es un nomnbre',
    description: 'Esto es una descripción de prueba lo suficientemente grande para probar un texto'
  },
  {
    name: 'esto es un nomnbre',
    description: 'Esto es una descripción de prueba lo suficientemente grande para probar un texto, lo suficientemente grande para probar un texto, Esto es una descripción de prueba lo suficientemente grande para probar un texto, lo suficientemente grande para probar un texto'
  }
]

function App () {
  return (
      <List items={items}/>
  )
}

export default App
