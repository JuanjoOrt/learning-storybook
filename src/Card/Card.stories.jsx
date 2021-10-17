import CardComponent from './Card'

export default {
  title: 'layout/profile',
  component: CardComponent
}

const Template = (args) => <CardComponent {...args} />

export const Card = Template.bind({})
Card.args = {
  children: 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  loading: false
}
