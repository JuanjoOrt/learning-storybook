import Button from './Button'

export default {
  title: 'inputs/buttons',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    docs: {
      page: null
    }
  }
}

const Template = (args) => <Button {...args} />

export const Secundary = Template.bind({})
Secundary.args = {
  children: 'Texto de prueba',
  className: ''
}
