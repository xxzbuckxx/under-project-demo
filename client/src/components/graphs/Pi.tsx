import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

import "../../styles/components/Pi.scss";

interface propsPiGraph {
  data: Array<Object>
}

const COLORS = ["#4A6E2C", "#6E9532", "#CBD595"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${"$" +(value).toFixed(2)}`}
    </text>
  );
};
/*Change this {`${(percent * 100).toFixed(0)}%`} to get actual data and #'s
  Tried data[0].value but only sets one value for all
  "$" + data[index].value works in sandbox
*/
const Pi = (props: propsPiGraph) => {
  console.log('PiGraph.tsx: PiGraph data:', props.data);
  return (
    <PieChart width={400} height={400}>
      <Legend layout="horizontal" verticalAlign="top" align="center" />
      <Pie
        data={props.data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {props.data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Pi;
