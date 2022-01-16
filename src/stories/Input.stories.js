import Input from '../components/Input/Input';

export default {
  title: 'Component/Input',
  component: Input
};

const Template = args => <Input {...args} />

export const Gray = Template.bind({})
Gray.args = {
  placeholder: 'Placeholder',
  backgroundColor: '#F2F2F2',
  size: 'md',
};