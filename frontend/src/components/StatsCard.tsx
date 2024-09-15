import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const statsData = [
  {
    id: 1,
    title: "Projects",
    value: "100/110",
    icon: <WorkOutlineIcon fontSize="large" />,
  },
  {
    id: 2,
    title: "Tasks",
    value: "130/150",
    icon: <AssignmentTurnedInOutlinedIcon fontSize="large" />,
  },
  {
    id: 3,
    title: "Resources",
    value: "34/56",
    icon: <DriveFolderUploadOutlinedIcon fontSize="large" />,
  },
];

function StatsCard() {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="flex p-5 border border-gray-300 rounded-md gap-3"
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            {stat.icon}
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl lg:text-2xl font-semibold">{stat.value}</h3>
            <p className="text-gray-500 font-semibold">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCard;
