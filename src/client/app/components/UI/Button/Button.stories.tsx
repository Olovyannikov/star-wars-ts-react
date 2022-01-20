import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';
import {ButtonProps} from "./Button.props";

export default {
    title: 'UI-Kit / Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {variant: 'primary', children: 'Button', onClick: () => console.log('Clicked')};

export const Secondary = Template.bind({});
Secondary.args = {variant: 'secondary', children: 'Button', onClick: () => console.log('Clicked')};

export const Light = Template.bind({});
Light.args = {variant: 'primary', children: 'Button', theme: 'light', onClick: () => console.log('Clicked')};

export const Dark = Template.bind({});
Dark.args = {variant: 'primary', children: 'Button', theme: 'dark', onClick: () => console.log('Clicked')};

export const Disabled = Template.bind({});
Disabled.args = {variant: 'primary', children: 'Button', theme: 'dark', disabled: true};