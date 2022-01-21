import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Video} from "@/ui";
import {VideoProps} from "./Video.props";

export default {
    title: "UI-Kit / Video",
    component: Video
} as ComponentMeta<typeof Video>;

const props: VideoProps = {
    src: '/video/han-solo.mp4',
    autoPlay: true,
    muted: true,
    loop: true,
};

const Template: ComponentStory<typeof Video> = (args: VideoProps): JSX.Element => {
    return (
        <Video
            {...args}
            src="/video/han-solo.mp4"
        />
    )
}

export const Playground = Template.bind({});
Playground.args = {...props};