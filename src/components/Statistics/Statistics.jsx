import React from 'react';
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const students = [
    {
      name: 'Assignment-1',
      marks: 57,
    },
    {
      name: 'Assignment-2',
      marks: 60,
    },
    {
      name: 'Assignment-3',
      marks: 49,
    },
    {
      name: 'Assignment-4',
      marks: 55,
    },
    {
      name: 'Assignment-5',
      marks: 29,
    },
    {
      name: 'Assignment-6',
      marks: 25,
    },
    {
      name: 'Assignment-7',
      marks: 60,
    },
  ];
    return (
        <>
            <div className="max-w-[80%] mx-auto my-20 ">
            <h1 className="text-2xl font-bold text-center my-20">Here are my 7 assignment marks </h1>
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            width={500}
            height={500}
            data={ students}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#82ca9d" fill="#063970" />
          </AreaChart>
        </ResponsiveContainer>
        </div>
        </>
     
       
    );
};

export default Statistics;