import { Box, Sheet, Typography } from "@mui/joy";

interface CardProps {
  title: string;
  values: string;
  icon: JSX.Element;
}

const DashboardCard: React.FC<CardProps> = ({ title, values, icon }) => {
  return (
    <Sheet
      variant="outlined"
      sx={{
        width: 250,
        height: 100,
        p: 2,
        borderRadius: "sm",
        display: "flex",
        justifyContent: "space-around",
        boxShadow: "sm",
      }}
    >
      <Box
        alignSelf={"center"}
        borderRadius={"50%"}
        px={2}
        py={1.5}
        bgcolor="rgba(245, 238, 237, 0.2)"
      >
        {icon}
      </Box>
      <Box alignSelf={"center"}>
        <Typography level="title-lg">{values}</Typography>
        <Typography level="title-md">{title}</Typography>
      </Box>
    </Sheet>
  );
};

export default DashboardCard;
