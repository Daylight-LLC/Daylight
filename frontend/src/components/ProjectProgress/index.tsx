import { Sheet } from "@mui/joy";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

interface ProgressProps {
  width: number;
  height: number;
  value: number;
  fontSize: number;
  cardWidth: number;
  boxShadow: string;
  variant: string;
}
export default function ProjectProgress(props: ProgressProps) {
  const settings: ProgressProps = {
    width: props.width,
    height: props.height,
    value: props.value,
    fontSize: props.fontSize,
    cardWidth: props.cardWidth,
    boxShadow: props.boxShadow,
    variant: props.variant,
  };

  return (
    <Sheet
      variant={props.variant as any}
      sx={{
        width: props.cardWidth,
        borderRadius: "sm",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: props.boxShadow,
      }}
    >
      <Gauge
        {...settings}
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: settings.fontSize,
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
