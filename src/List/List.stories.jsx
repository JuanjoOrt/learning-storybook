import List from './List'

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

export default {
  title: 'layout/list',
  component: List,
  argTypes: { onClick: { action: 'clicked' } }
}

const Template = (args) => <List {...args} />

export const ListComponent = Template.bind({})
ListComponent.args = {
  items: items
}
