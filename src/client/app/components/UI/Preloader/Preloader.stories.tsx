import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Preloader} from "@/ui";
import {PreloaderProps} from "./Preloader.props";

export default {
    title: 'UI-Kit / Preloader',
    component: Preloader
} as ComponentMeta<typeof Preloader>;

const props: PreloaderProps = {};

const Template: ComponentStory<typeof Preloader> = (args: PreloaderProps): JSX.Element => <Preloader {...args} />;

export const PreloaderExample = Template.bind({});
PreloaderExample.args = {...props};