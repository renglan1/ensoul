import React from 'react';

import TomeCards from '../components/TomeCards';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'TomeCard',
    component: TomeCards,
} as ComponentMeta<typeof TomeCards>

const Template: ComponentStory<typeof TomeCards> = (args: any) => <TomeCards {...args} />;

export const Default = Template.bind({});
