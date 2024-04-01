// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import axios from "axios";
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";

const RevenueReport = (props) => {
  // ** State
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({
      orders_bar_chart: {
        title: "Orders",
        statistics: "2,76k",
        series: [
          {
            name: "2020",
            data: [45, 85, 65, 45, 65],
          },
        ],
      },
      profit_line_chart: {
        title: "Profit",
        statistics: "6,24k",
        series: [
          {
            data: [0, 20, 5, 30, 15, 45],
          },
        ],
      },
      subscribers_gained: {
        series: [
          {
            name: "Subscribers",
            data: [28, 40, 36, 52, 38, 60, 55],
          },
        ],
        analyticsData: {
          subscribers: 92600,
        },
      },
      revenueGenerated: {
        series: [
          {
            name: "Revenue",
            data: [350, 275, 400, 300, 350, 300, 450],
          },
        ],
        analyticsData: {
          revenue: 97500,
        },
      },
      quarterlySales: {
        series: [
          {
            name: "Sales",
            data: [10, 15, 7, 12, 3, 16],
          },
        ],
        analyticsData: {
          sales: "36%",
        },
      },
    });
  }, []);

  const revenueOptions = {
      chart: {
        stacked: true,
        type: "bar",
        toolbar: { show: false },
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
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: "17%",
          borderRadius: [4],
          borderRadiusWhenStacked: "all",
          borderRadiusApplication: "start",
        },
        distributed: true,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#b9b9c3",
            fontSize: "0.86rem",
          },
        },
      },
    },
    revenueSeries = [
      {
        name: "Earning",
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72],
      },
      {
        name: "Expense",
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100],
      },
    ];

  return data !== null ? (
    <Card className="card-revenue-budget">
      <Row className="mx-0">
        <Col className="revenue-report-wrapper" md="12" xs="12">
          <div className="d-sm-flex justify-content-between align-items-center mb-3">
            <CardTitle className="mb-50 mb-sm-0">Revenue Report</CardTitle>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center me-2">
                <span className="bullet bullet-primary me-50 cursor-pointer"></span>
                <span>Earning</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="bullet bullet-warning me-50 cursor-pointer"></span>
                <span>Expense</span>
              </div>
            </div>
          </div>
          <Chart
            id="revenue-report-chart"
            type="bar"
            height="230"
            options={revenueOptions}
            series={revenueSeries}
          />
        </Col>
      </Row>
    </Card>
  ) : null;
};

export default RevenueReport;
