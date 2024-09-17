import { useColorScheme } from "@mui/joy/styles";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import React from "react";

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Select
      value={mode}
      onChange={(_, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: "max-content" }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}
