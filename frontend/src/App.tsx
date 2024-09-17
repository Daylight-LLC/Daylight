import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { CssVarsProvider } from "@mui/joy";

export default function App() {
  return (
    <div>
      <CssVarsProvider>
        <Layout>
          <Outlet />
        </Layout>
      </CssVarsProvider>
    </div>
  );
}
