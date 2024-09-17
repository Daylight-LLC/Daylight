import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import GlobalStyles from "@mui/joy/GlobalStyles";
import { Breadcrumbs } from "@mui/joy";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import DashboardCard from "../../components/DashboardCard";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import DashboardProjectsTable from "../../components/DashboardProjectsTable";

const Dashboard = () => {
  return (
    <Box
      sx={{
        py: 1.5,
        px: 3,
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
      <Breadcrumbs size="sm" separator="">
        <Link to="/">
          <HomeRoundedIcon />
        </Link>
        <KeyboardArrowRightRoundedIcon fontSize="small" />
        <Typography level="body-sm" color="neutral">
          Dashboard
        </Typography>
      </Breadcrumbs>
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
        <DashboardProjectsTable />
      </Box>
    </Box>
  );
};

export default Dashboard;
