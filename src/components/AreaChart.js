import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import "../css/AreaChart.css";
import axios from "axios";
import store from "../store/store";

export default (props) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "jobs/summary  ", {
        headers: {
          authorization: store.getState().authReducer.token,
        },
      })
      .then(({ data }) => {
        console.log(data);
        let dataG = data.map((singleData) => {
          return {
            ...singleData,
            amountEarned: singleData.totalFormInfoAmountEarnedQuantity1,
          };
        });
        setGraphData([...dataG]);
      })
      .catch((e) => {
        console.log(e);
        props.errorCallback();
        // alert("Error fetching results");
      });
  }, []);

  return (
    <div className="AreaChartParent">
      <h5>Amount Earned </h5>
      <AreaChart
        width={window.innerWidth * 0.35}
        height={window.innerHeight * 0.4}
        data={graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="baseFormInfoProductName" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amountEarned"
          stroke="#8884d8"
          fill="#52AC56"
        />
      </AreaChart>
    </div>
  );
};
