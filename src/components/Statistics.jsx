import React, { useContext } from "react";
import { QuizContext } from "./Root";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useContext(QuizContext);
  const totalData = data.data;
  return (
    <div className="text-center mt-10">
      <h2 className="font-bold text-2xl">Line Chart</h2>
      <ResponsiveContainer className="mx-auto mt-4" width="75%" height={400}>
        <LineChart data={totalData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-lg font-bold">Fig: Line Chart of Quiz</p>
    </div>
  );
};

export default Statistics;
