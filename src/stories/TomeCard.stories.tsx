import React from 'react';

import TomeCard from '../components/TomeCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'TomeCard',
    component: TomeCard,
} as ComponentMeta<typeof TomeCard>

const Template: ComponentStory<typeof TomeCard> = (args: any) => <TomeCard {...args} />;

export const Default = Template.bind({});
