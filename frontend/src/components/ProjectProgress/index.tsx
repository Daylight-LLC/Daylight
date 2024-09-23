import { Sheet, Typography } from "@mui/joy";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const settings = {
  width: 200,
  height: 200,
  value: 60,
};

export default function ProjectProgress() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        width: "15.6rem",
        height: { xs: "6.25rem", md: "21rem" },
        borderRadius: "sm",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "sm",
      }}
    >
      <Typography level="title-lg" py={2}>
        Progress
      </Typography>
      <Gauge
        {...settings}
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "#52b202",
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
      />
    </Sheet>
  );
}
