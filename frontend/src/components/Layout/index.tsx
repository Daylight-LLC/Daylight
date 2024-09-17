import React from "react";
import Sidebar from "../Sidebar";
import { Box, CssBaseline } from "@mui/material";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.paper", p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
