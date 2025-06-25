// src/components/BarometerChart.js
import React from "react";
import { Card, Title } from "@tremor/react";
// import './BarometerChart.css';

type BarometerChartTypes = {
  value: any;
};

const BarometerChart = ({ value }: BarometerChartTypes) => {
  const min = 0;
  const max = 100;
  const percentage = ((value - min) / (max - min)) * 100;
  const angle = (percentage / 100) * 180; // Convert percentage to angle (0 to 180 degrees)

  return (
    <>
      {/* <Title>Market Sentiment</Title> */}
      <div className="barometer-container">
        <svg className="gauge" viewBox="0 0 100 50">
          <path
            className="gauge-bg"
            d="M 10,50 A 40,40 0 0,1 90,50"
            stroke="#e6e6e6"
            strokeWidth="2"
            fill="none"
          />
          <path
            className="gauge-fill"
            d="M 10,50 A 40,40 0 0,1 90,50"
            stroke="#007bff"
            strokeWidth="2"
            fill="none"
            style={{ strokeDasharray: `${percentage}, 100` }}
          />
          <line
            className="gauge-needle"
            x1="50"
            y1="50"
            x2={50 + 40 * Math.cos((angle - 90) * (Math.PI / 180))}
            y2={50 + 40 * Math.sin((angle - 90) * (Math.PI / 180))}
            stroke="#ff0000"
            strokeWidth="2"
          />
          <circle className="gauge-center" cx="50" cy="50" r="2" fill="#000" />
        </svg>
        <div className="gauge-value">
          <span>{value}</span>
          <span>{value <= 33 ? "Cold" : value <= 66 ? "Warm" : "Hot"}</span>
        </div>
      </div>
    </>
  );
};

export default BarometerChart;
