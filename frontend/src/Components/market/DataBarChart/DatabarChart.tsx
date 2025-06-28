// src/DatabarChart.js
import React from "react";

type DatabarChartTypes = {
  minValue: any;
  maxValue: any;
  nameA: string;
  nameB: string;
};

const DatabarChart = ({
  minValue,
  maxValue,
  nameA,
  nameB,
}: DatabarChartTypes) => {
  const profit = minValue;
  const loss = maxValue;

  const total = profit + loss;
  const profitPercentage = (profit / total) * 100;
  const lossPercentage = (loss / total) * 100;

  return (
    <div className="profit-loss-chart">
      <div className="bar-container flex gap-1.5">
        <div
          className="bar-profit"
          style={{ width: `${profitPercentage}%` }}
        ></div>
        <div className="bar-loss" style={{ width: `${lossPercentage}%` }}></div>
      </div>
      <div className="value-container">
        <div className="value">
          <span>{nameA}</span>
          <span className="profit-value">{profit?.toLocaleString()}</span>
        </div>
        <div className="value">
          <span>{nameB}</span>
          <span className="loss-value">{loss?.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default DatabarChart;
