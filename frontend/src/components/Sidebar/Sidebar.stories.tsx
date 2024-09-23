import { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./index";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import createTheme

const meta: Meta<typeof Sidebar> = {
  title: "Component/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const theme = createTheme();

export const Primary: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    </ThemeProvider>
  ),
};
