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
  value: '',
  disabled: false,
  helperText: '',
};

export const Hover = Template.bind({})
Hover.args = {
  placeholder: 'Placeholder',
  borderColor: '#333333',
  size: 'md',
  value: '',
  disabled: false,
  helperText: '',
};

export const Focus = Template.bind({})
Focus.args = {
  placeholder: 'Placeholder',
  borderColor: '#2962FF',
  size: 'md',
  value: '',
  disabled: false,
  helperText: '',
};

export const Error = Template.bind({})
Error.args = {
  placeholder: 'Placeholder',
  borderColor: '#D32F2F',
  size: 'md',
  value: '',
  disabled: false,
  helperText: '',
};

export const ErrorFocus = Template.bind({})
ErrorFocus.args = {
  placeholder: 'Placeholder',
  borderColor: '#333333',
  size: 'md',
  value: '',
  disabled: false,
  helperText: '',
};

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Placeholder',
  borderColor: 'transparent',
  size: 'md',
  value: '',
  disabled: true,
  helperText: '',
};

export const helperText = Template.bind({})
helperText.args = {
  placeholder: 'Placeholder',
  borderColor: '#333333',
  size: 'md',
  value: '',
  disabled: false,
  helperText: 'Some interesting text',
};

export const value = Template.bind({})
value.args = {
  placeholder: 'Placeholder',
  borderColor: '#333333',
  size: 'md',
  value: 'Text',
  disabled: false,
  helperText: '',
};