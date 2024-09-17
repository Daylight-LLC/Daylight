// import React from 'react';
// // @ts-ignore 
// import CanvasJSReact from '@canvasjs/react-charts';

// const CanvasJS = CanvasJSReact.CanvasJS;
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const Preview = () => {
//   const options = {
//     animationEnabled: true,
//     title: {
//       text: "Fruit Distribution"
//     },
//     data: [{
//       type: "doughnut",
//       showInLegend: true,
//       indexLabel: "{name}: {y}%",
//       yValueFormatString: "#,###'%'",
//       dataPoints: [
//         { name: "Open", y: 45 },
//         { name: "IN Progress", y: 25 },
//         { name: "Review", y: 20 },
//       ]
//     }]
//   };

//   return (
//     <div className="border-2 border-gray-300 rounded-md flex items-center justify-center p-4 h-full w-full">
//       <CanvasJSChart options={options} />
//     </div>
//   );
// };

// export default Preview;

import React from 'react';
// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Preview = () => {
  
  const options = {
    animationEnabled: true,
    title: {
      text: "Preview",
      horizontalAlign: "left",  // Align the title to the right
      verticalAlign: "top",      // Position the title at the top
      fontSize: 16,              // Adjust font size
      fontWeight: "bold",      // Make the title less bold
      fontFamily: "Arial",       // Change the font family if desired
    },
    data: [{
      type: "doughnut",
      showInLegend: true,   // Show the legend if you want to keep it
      indexLabel: null,     // Remove the lined labels on the segments
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { name: "Open", y: 45, color: "#2986cc" },
        { name: "In Progress", y: 25, color: "#9fc5e8" },
        { name: "Review", y: 20, color:"#0b5394" },
      ]
      ,
      innerRadius: "60%",  // Adjust this value to change the inner radius of the doughnut
      radius: "80%", 
    }],
    legend: {
      // Customize the legend here if needed
      verticalAlign: "bottom",
      horizontalAlign: "center",
      fontSize: 12,
      fontFamily: "tahoma",
      cursor: "pointer",
      itemclick: function(e:React.MouseEvent<HTMLButtonElement>) {
        // function if want to add some event on clicking over the labels
      }
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-md flex items-center justify-center p-4 h-full w-full">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Preview;
