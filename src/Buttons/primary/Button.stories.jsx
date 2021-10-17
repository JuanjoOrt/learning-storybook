import Button from './Button'
import buttonDocs from './docs.mdx'

export default {
  title: 'inputs/buttons',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    docs: {
      page: buttonDocs
    }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Texto de prueba',
  className: ''
}
