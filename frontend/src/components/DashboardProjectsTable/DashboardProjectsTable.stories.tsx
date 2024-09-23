import { Meta, StoryObj } from "@storybook/react";
import DashboardProjectsTable from "./index";

const meta: Meta<typeof DashboardProjectsTable> = {
  title: "Component/DashboardProjectsTable",
  component: DashboardProjectsTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    calories: { control: "number" },
    carbs: { control: "number" },
    fat: { control: "number" },
    name: { control: "text" },
    protein: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    calories: 100,
    carbs: 200,
    fat: 150,
    name: "XYZ",
    protein: 30,
  },
};
