import { Sheet, Table, Typography } from "@mui/joy";

interface CardProps {
  variant: string;
  height: number;
  width: string;
  heading: string;
  header1: string;
  header2: string;
}

const topPerformers = [
  {
    name: "Harry Potter",
    percentage: "97",
  },
  {
    name: "Hermione Granger",
    percentage: "99",
  },
  {
    name: "Ron Weasley",
    percentage: "92",
  },
  {
    name: "Luna Lovegood",
    percentage: "94",
  },
  {
    name: "Neville Longbottom",
    percentage: "90",
  },
  {
    name: "Draco Malfoy",
    percentage: "88",
  },
  {
    name: "Ginny Weasley",
    percentage: "93",
  },
];

const TopPerformer = (props: CardProps) => {
  return (
    <Sheet
      variant={props.variant as any}
      sx={{
        height: props.height,
        width: props.width,
        borderRadius: 4,
        boxShadow: "sm",
      }}
    >
      <Typography level="title-md" textAlign={"center"} py={4}>
        {props.heading}
      </Typography>

      <Table
        variant="outlined"
        hoverRow
        sx={{
          px: 1,
        }}
      >
        <thead>
          <th>{props.header1}</th>
          <th>{props.header2}</th>
        </thead>
        <tbody>
          {topPerformers
            .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
            .slice(0, 5)
            .map((item, index) => (
              <tr key={index}>
                <td>{item.name.split(" ")[0]}</td>
                <td>{item.percentage}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default TopPerformer;
