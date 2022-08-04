import React from "react";

import FragmentCards from "../components/FragmentCards";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "FragmentCards",
  component: FragmentCards,
} as ComponentMeta<typeof FragmentCards>;

const Template: ComponentStory<typeof FragmentCards> = (args: any) => (
  <FragmentCards {...args} />
);

export const Default = Template.bind({});
Default.args = {
  characters: [
    {
      id: 1,
      name: "Artorias",
      title: "the Abysswalker",
      link: "https://darksouls.wiki.fextralife.com/Artorias+the+Abysswalker",
    },
  ],
};
