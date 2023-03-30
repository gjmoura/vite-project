import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultChecked: false,
  id: 'Checkbox_Storybook',
  label: 'Checkbox',
};
