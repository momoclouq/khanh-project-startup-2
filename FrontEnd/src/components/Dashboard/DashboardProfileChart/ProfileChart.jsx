import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    hours: 5,
  },
  {
    name: "Feb",
    hours: 5,
  },
  {
    name: "Mar",
    hours: 5,
  },
  {
    name: "Apr",
    hours: 5,
  },
  {
    name: "May",
    hours: 5,
  },
  {
    name: "Jun",
    hours: 5,
  },
  {
    name: "Jul",
    hours: 5,
  },
];

export const ProfileChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          allowDataOverflow={true}
          axisLine={false}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Bar
          dataKey="hours"
          fill="#CBF4F0"
          radius={[35, 35, 35, 35]}
          barSize={22}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
