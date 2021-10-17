import Text from './Text'

export default {
  title: 'form/inputs',
  component: Text,
  argTypes: { onChange: { action: 'change' } }
}

const Template = (args) => <Text {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
  placeHolder: '',
  className: ''
}
