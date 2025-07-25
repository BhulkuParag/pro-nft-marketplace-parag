import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, PieProps } from "recharts";

const ActiveShapePieChart = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
    color,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={color}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={color}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={color}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={color} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${payload.name} ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default ActiveShapePieChart;

// const ShapePieChart = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const onPieEnter: PieProps["onMouseEnter"] = (_, index) => {
//     setActiveIndex(index as number);
//   };

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <PieChart width={400} height={400}>
//         <Pie
//           activeIndex={activeIndex}
//           activeShape={ActiveShapePieChart}
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius={30}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//           onMouseEnter={onPieEnter}
//         />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default ShapePieChart;
