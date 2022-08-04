import React from 'react';

import FragmentCard from '../components/FragmentCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'FragmentCard',
    component: FragmentCard,
} as ComponentMeta<typeof FragmentCard>

const Template: ComponentStory<typeof FragmentCard> = (args: any) => <FragmentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    characterName: 'Artorias',
    characterTitle: 'the Abysswalker',
    characterLink: 'https://darksouls.wiki.fextralife.com/Artorias+the+Abysswalker',
}
