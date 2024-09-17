// src/components/Topbar/index.tsx
import { CssVarsProvider, Sheet } from "@mui/joy";

const Topbar = () => {
  return (
    <CssVarsProvider>
      <Sheet>Menu</Sheet>
    </CssVarsProvider>
  );
};

export default Topbar;
