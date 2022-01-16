import Input from '../components/Input/Input';

export default {
  title: 'Component/Input',
  component: Input
};

const Template = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder',
  borderColor: '#F2F2F2',
  size: 'md',
  isHover: false,
  disabled: false,
};

export const Hover = Template.bind({})
Hover.args = {
  placeholder: 'Placeholder',
  borderColor: '#333333',
  size: 'md',
  isHover: true,
  disabled: false,
};

export const Focus = Template.bind({})
Focus.args = {
  placeholder: 'Placeholder',
  borderColor: '#2962FF',
  size: 'md',
  isHover: false,
  disabled: false,
};

export const Error = Template.bind({})
Error.args = {
  placeholder: 'Placeholder',
  borderColor: '#D32F2F',
  size: 'md',
  isHover: false,
  disabled: false,
};

export const ErrorFocus = Template.bind({})
ErrorFocus.args = {
  placeholder: 'Placeholder',
  borderColor: '#333333',
  size: 'md',
  isHover: false,
  disabled: false,
};

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Placeholder',
  borderColor: '#333333',
  size: 'md',
  isHover: false,
  disabled: true,
};