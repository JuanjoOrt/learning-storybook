import Button from './Button'

export default {
  title: 'form/buttons',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
}

const Template = (args) => <Button {...args} />

export const Secundary = Template.bind({})
Secundary.args = {
  children: 'Texto de prueba',
  className: ''
}
