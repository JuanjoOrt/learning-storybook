import Number from './Number'

export default {
  title: 'form/inputs',
  component: Number,
  argTypes: { onChange: { action: 'change' } }
}

const Template = (args) => <Number {...args} />

export const NumberInput = Template.bind({})
NumberInput.args = {
  placeHolder: '',
  className: ''
}
