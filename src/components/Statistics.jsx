import React, { useContext } from "react";
import { QuizContext } from "./Root";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useContext(QuizContext);
  const totalData = data.data;
  console.log(totalData);
  // const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div className="md:m-7 text-center">
      <h2 className="font-bold text-2xl">Line Chart</h2>
      <LineChart
        className="mx-auto mt-4"
        width={400}
        height={300}
        data={totalData}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
      </LineChart>
      <p className="text-lg font-bold">Fig: Line Chart of Quiz</p>
    </div>
  );
};

export default Statistics;
