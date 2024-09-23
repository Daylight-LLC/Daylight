import type { Meta, StoryObj } from "@storybook/react";

import ProjectProgress from "./index";

const meta: Meta<typeof ProjectProgress> = {
  component: ProjectProgress,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    height: { control: "number" },
    width: { control: "number" },
    value: { control: "number" },
    cardWidth: { control: "number" },
    boxShadow: { control: "number" },
    variant: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    height: 200,
    width: 200,
    value: 60,
    fontSize: 40,
    cardWidth: 250,
    boxShadow: "sm",
    variant: "outlined",
  },
};

export const Medium: Story = {
  args: {
    height: 100,
    width: 100,
    value: 30,
    fontSize: 20,
    cardWidth: 100,
    boxShadow: "sm",
    variant: "outlined",
  },
};
export const Small: Story = {
  args: {
    height: 50,
    width: 50,
    value: 21,
    fontSize: 10,
    cardWidth: 50,
  },
};
