import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Input} from "@/ui";
import {InputProps} from "./Input.props";

export default {
    title: 'UI-Kit / Input',
    component: Input
} as ComponentMeta<typeof Input>;

const props: InputProps = {
    placeholder: 'Enter something',
    value: ''
};

const Template: ComponentStory<typeof Input> = (args: InputProps): JSX.Element => <Input {...args} />;

export const InputExample = Template.bind({});
InputExample.args = {...props};