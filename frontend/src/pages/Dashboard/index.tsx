import { Box, Divider, Typography } from "@mui/joy";
import { Link } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Breadcrumbs from "@mui/joy/Breadcrumbs";

const Dashboard = () => {
  return (
    <div>
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="sm" />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>

          <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
            Dashboard
          </Typography>
        </Breadcrumbs>
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          Dashboard
        </Typography>
      </Box>
      <Divider sx={{ width: "100svw" }} />
      <Box></Box>
    </div>
  );
};

export default Dashboard;
