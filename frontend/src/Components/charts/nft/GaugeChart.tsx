// GaugeChart.tsx
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

interface GaugeChartProps {
  value: number;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value }) => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    // Register necessary components and plugins
    Chart.register(...registerables);

    // Create a custom plugin for the needle
    const needlePlugin = {
      id: "needle",
      afterDraw(chart: Chart) {
        const {
          ctx,
          chartArea: { width, height },
        } = chart;

        ctx.save();
        const centerX = width / 2;
        const centerY = height / 2;
        const angle = (Math.PI / 2) * (1 - value / 100);

        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -height / 2);
        ctx.strokeStyle = "rgba(255, 99, 132, 1)";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      },
    };

    // Register the custom plugin
    Chart.register(needlePlugin);

    // Cleanup on unmount
    return () => {
      Chart.unregister(needlePlugin);
    };
  }, [value]);

  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(200, 200, 200, 0.2)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    rotation: -Math.PI,
    circumference: Math.PI,
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      r: {
        display: false,
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div style={{ position: "relative" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default GaugeChart;
