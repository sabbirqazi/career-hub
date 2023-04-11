import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const students = [
    {
      name: "Assignment-1",
      marks: 57,
    },
    {
      name: "Assignment-2",
      marks: 60,
    },
    {
      name: "Assignment-3",
      marks: 49,
    },
    {
      name: "Assignment-4",
      marks: 55,
    },
    {
      name: "Assignment-5",
      marks: 29,
    },
    {
      name: "Assignment-6",
      marks: 25,
    },
    {
      name: "Assignment-7",
      marks: 60,
    },
  ];
  return (
    <>
      <div className="max-w-[80%] mx-auto my-20 ">
        <h1 className="text-4xl font-bold text-center my-20 text-indigo-500">
          Here Are My 7 Assignment Marks{" "}
        </h1>
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            width={500}
            height={500}
            data={students}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3c1053" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3c1053" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="#3c1053" fillOpacity={1} fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
        <h1 className="text-2xl font-bold text-center my-10">
         Chart: Assignment Marks
        </h1>
      </div>
    </>
  );
};

export default Statistics;
