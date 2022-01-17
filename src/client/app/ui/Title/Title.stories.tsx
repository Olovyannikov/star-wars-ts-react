import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Title} from "@/ui";
import {TitleProps} from "./Title.props";

export default {
    title: 'UI-Kit / Title',
    component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: TitleProps) => <Title {...args} />;

const props: TitleProps = {
    children: 'Title Text',
    variant: 'h1'
}

export const TitleLevel1 = Template.bind({});
TitleLevel1.args = {...props};

export const TitleLevel2 = Template.bind({});
TitleLevel2.args = {...props, variant: 'h2'};

export const TitleLevel3 = Template.bind({});
TitleLevel3.args = {...props, variant: 'h3'};