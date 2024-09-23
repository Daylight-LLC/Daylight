import DashboardCard from "./index";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DashboardCard> = {
  title: "Component/DashboardCard",
  component: DashboardCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    values: { control: "text" },
    icon: { control: Element },
    width: { control: "number" },
    height: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Projects",
    values: "10/12",
    icon: <AccountTreeRoundedIcon />,
    width: 250,
    height: 100,
  },
};
