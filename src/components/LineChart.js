import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../css/lineChart.css";
import axios from "axios";
import store from "../store/store";

export default () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "jobs/comparison", {
        headers: { authorization: store.getState().authReducer.token },
      })
      .then(({ data }) => {
        console.log(data);
        setstate(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="LineChartParent">
      <h5>Amount Earned vs Total Cost</h5>
      <LineChart
        width={window.innerWidth * 0.35}
        height={window.innerHeight * 0.4}
        data={state}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="productName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="amountEarned"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="totalCostQuantity" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};
