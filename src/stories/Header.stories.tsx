import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../components/Header';

export default {
    title: 'Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    expanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
    expanded: true,
};
