import Button from '../components/Button/Button'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: { handleClick: { action: 'hancleClick' } },
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'lg',
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: 'red',
  label: 'Press Me fad afd faeegage agegegaege afaefaeg',
  size: 'lg',
}