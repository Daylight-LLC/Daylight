import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import GlobalStyles from "@mui/joy/GlobalStyles";

import DashboardCard from "../../components/DashboardCard";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import DashboardProjectsTable from "../../components/DashboardProjectsTable";
import ProjectProgress from "../../components/ProjectProgress";
import Topbar from "../../components/Topbar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Add } from "@mui/icons-material";
import TasksTable from "../../components/TasksTable";

const Dashboard = () => {
  return (
    <Box
      sx={{
        py: { xs: "0", md: 1.5 },
        px: { xs: 1.5, md: 3 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: theme.vars.palette.background.body,
            color: theme.vars.palette.text.primary,
          },
        })}
      />
      <Topbar
        title="Dashboard"
        path="/"
        icon={<HomeRoundedIcon />}
        buttonIcon={<Add />}
        buttonText={"Add Widgets"}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography level="h1">Dashboard</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          <DashboardCard
            title="Projects"
            values="10/20"
            icon={<AccountTreeRoundedIcon fontSize="large" />}
          />
          <DashboardCard
            title="Projects"
            values="10/20"
            icon={<AccountTreeRoundedIcon fontSize="large" />}
          />
          <DashboardCard
            title="Projects"
            values="10/20"
            icon={<AccountTreeRoundedIcon fontSize="large" />}
          />
          <DashboardCard
            title="Projects"
            values="10/20"
            icon={<AccountTreeRoundedIcon fontSize="large" />}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <DashboardProjectsTable />
          <ProjectProgress />
        </Box>
        <Box>
          <TasksTable />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
