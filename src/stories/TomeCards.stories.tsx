import React from "react";

import TomeCards from "../components/TomeCards";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "TomeCards",
  component: TomeCards,
} as ComponentMeta<typeof TomeCards>;

const Template: ComponentStory<typeof TomeCards> = (args: any) => (
  <TomeCards {...args} />
);

export const Default = Template.bind({});
Default.args = {
  figures: [
    {
      id: 1,
      name: "Artorias",
      title: "the Abysswalker",
      link: "https://darksouls.wiki.fextralife.com/Artorias+the+Abysswalker",
    },
  ],
};
