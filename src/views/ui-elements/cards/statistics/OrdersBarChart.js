// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import axios from "axios";

// ** Custom Components
import TinyChartStats from "@components/widgets/stats/TinyChartStats";

const OrdersBarChart = ({ warning }) => {
  // ** State
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({
      title: "Orders",
      statistics: "2,76k",
      series: [
        {
          name: "2020",
          data: [45, 85, 65, 45, 65],
        },
      ],
    });
  }, []);

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    grid: {
      padding: {
        top: -20,
        bottom: -10,
      },
      yaxis: {
        lines: { show: false },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: [0, 5],
        colors: {
          backgroundBarColors: [
            "#f3f3f3",
            "#f3f3f3",
            "#f3f3f3",
            "#f3f3f3",
            "#f3f3f3",
          ],
          backgroundBarRadius: 5,
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: [warning],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        style: {
          colors: "#b9b9c3",
          fontSize: "0.86rem",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  };

  return data !== null ? (
    <TinyChartStats
      height={70}
      type="bar"
      options={options}
      title={data.title}
      stats={data.statistics}
      series={data.series}
    />
  ) : null;
};

export default OrdersBarChart;
