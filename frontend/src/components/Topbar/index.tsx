import { Box, Breadcrumbs, IconButton, Tooltip, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import React from "react";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

interface TopbarProps {
  title: string;
  path: string;
  icon: JSX.Element;
  buttonIcon: JSX.Element;
  buttonText: string;
}

const Topbar: React.FC<TopbarProps> = ({
  title,
  path,
  icon,
  buttonText,
  buttonIcon,
}) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Breadcrumbs size="sm" separator="">
        <Link to={path}>{icon}</Link>
        <KeyboardArrowRightRoundedIcon fontSize="small" />
        <Typography level="body-sm" color="neutral">
          {title}
        </Typography>
      </Breadcrumbs>
      <Box>
        <IconButton
          sx={{
            p: 1,
            ":hover": {
              bgcolor: "#0a6bcb",
              color: "white",
            },
          }}
        >
          {buttonIcon}
          {buttonText}
        </IconButton>
        <Tooltip title="Notifications" variant="plain">
          <IconButton>
            <NotificationsRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;
