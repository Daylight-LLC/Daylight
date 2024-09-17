import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";

import Sidebar from "./components/Sidebar";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function JoyOrderDashboardTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        <Sidebar />
        <Outlet />
      </Box>
    </CssVarsProvider>
  );
}
