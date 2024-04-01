// ** Third Party Components
import Chart from "react-apexcharts";
import { MoreVertical } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

// ** Icons Imports
import operaIcons from "@src/assets/images/icons/opera.png";
import safariIcon from "@src/assets/images/icons/apple-safari.png";
import IEIcon from "@src/assets/images/icons/internet-explorer.png";
import chromeIcon from "@src/assets/images/icons/google-chrome.png";
import firefoxIcon from "@src/assets/images/icons/mozila-firefox.png";
import starIcon from "@src/assets/images/icons/star.svg";
import bookIcon from "@src/assets/images/icons/book.svg";
import brushIcon from "@src/assets/images/icons/brush.svg";
import rocketIcon from "@src/assets/images/icons/rocket.svg";
import toolboxIcon from "@src/assets/images/icons/toolbox.svg";
import speakerIcon from "@src/assets/images/icons/speaker.svg";
import parachuteIcon from "@src/assets/images/icons/parachute.svg";

import { useEffect, useState } from "react";
import { getBrowserStats } from "../../../../redux/salesGrowth";
import { useDispatch, useSelector } from "react-redux";

const CardBrowserState = ({ colors, trackBgColor, heading, caption, type }) => {
  const dispatch = useDispatch();
  const browserStats = useSelector((state) => state.salesGrowth.browserStats);
  const [trans, setTrans] = useState([]);
  const ICONS = {
    chromeIcon: chromeIcon,
    firefoxIcon: firefoxIcon,
    IEIcon: IEIcon,
    safariIcon: safariIcon,
    operaIcons: operaIcons,
  };
  const formatBrowserStats = (browserStats) => {
    return browserStats?.map((browserStat, index) => {
      const updatedBrowserStat = {
        avatar: ICONS[browserStat.avatar],
        title: browserStat.title,
        value: browserStat.value,
        chart: {
          type: "radialBar",
          series: [parseInt(browserStat.value)],
          height: 30,
          width: 30,
          options: {
            grid: {
              show: false,
              padding: {
                left: -15,
                right: -15,
                top: -12,
                bottom: -15,
              },
            },
            colors: [colors.primary.main],
            plotOptions: {
              radialBar: {
                hollow: {
                  size: "22%",
                },
                track: {
                  background: trackBgColor,
                },
                dataLabels: {
                  showOn: "always",
                  name: {
                    show: false,
                  },
                  value: {
                    show: false,
                  },
                },
              },
            },
            stroke: {
              lineCap: "round",
            },
          },
        },
      };
      return updatedBrowserStat;
    });
  };

  useEffect(() => {
    dispatch(getBrowserStats());
  }, []);

  useEffect(() => {
    setTrans(formatBrowserStats(browserStats));
    console.log({ browserStats });
  }, [browserStats]);

  const prods = [
    {
      avatar: starIcon,
      title: "Star Shampoo",
      value: "54.4%",
      chart: {
        type: "radialBar",
        series: [54.4],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [colors.primary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "22%",
              },
              track: {
                background: trackBgColor,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
        },
      },
    },
    {
      avatar: bookIcon,
      title: "Books",
      value: "6.1%",
      chart: {
        type: "radialBar",
        series: [6.1],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [colors.warning.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "22%",
              },
              track: {
                background: trackBgColor,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
        },
      },
    },
    {
      avatar: rocketIcon,
      title: "Rockets",
      value: "14.6%",
      chart: {
        type: "radialBar",
        series: [14.6],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [colors.secondary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "22%",
              },
              track: {
                background: trackBgColor,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
        },
      },
    },
    {
      avatar: brushIcon,
      title: "Brush",
      value: "4.2%",
      chart: {
        type: "radialBar",
        series: [4.2],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [colors.info.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "22%",
              },
              track: {
                background: trackBgColor,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
        },
      },
    },
    {
      avatar: speakerIcon,
      title: "Speakers",
      value: "8.4%",
      chart: {
        type: "radialBar",
        series: [8.4],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [colors.danger.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "22%",
              },
              track: {
                background: trackBgColor,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
        },
      },
    },
  ];

  const renderStates = () => {
    if (type === "browser") {
      return trans.map((state) => {
        return (
          <div key={state.title} className="browser-states">
            <div className="d-flex">
              <img
                className="rounded me-1"
                src={state.avatar}
                height="30"
                alt={state.title}
              />
              <h6 className="align-self-center mb-0">{state.title}</h6>
            </div>
            <div className="d-flex align-items-center">
              <div className="fw-bold text-body-heading me-1">
                {state.value}
              </div>
              <Chart
                options={state.chart.options}
                series={state.chart.series}
                type={state.chart.type}
                height={state.chart.height}
                width={state.chart.width}
              />
            </div>
          </div>
        );
      });
    } else if (type === "top products") {
      return prods
        .sort((a, b) => parseInt(b.value) - parseInt(a.value))
        .map((state) => {
          return (
            <div key={state.title} className="browser-states">
              <div className="d-flex">
                <img
                  className="rounded me-1"
                  src={state.avatar}
                  height="30"
                  width="30"
                  alt={state.title}
                />
                <h6 className="align-self-center mb-0">{state.title}</h6>
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold text-body-heading me-1">
                  {state.value}
                </div>
                <Chart
                  options={state.chart.options}
                  series={state.chart.series}
                  type={state.chart.type}
                  height={state.chart.height}
                  width={state.chart.width}
                />
              </div>
            </div>
          );
        });
    } else {
      return prods
        .sort((a, b) => parseInt(a.value) - parseInt(b.value))
        .map((state) => {
          return (
            <div key={state.title} className="browser-states">
              <div className="d-flex">
                <img
                  className="rounded me-1"
                  src={state.avatar}
                  height="30"
                  width="30"
                  alt={state.title}
                />
                <h6 className="align-self-center mb-0">{state.title}</h6>
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold text-body-heading me-1">
                  {state.value}
                </div>
                <Chart
                  options={state.chart.options}
                  series={state.chart.series}
                  type={state.chart.type}
                  height={state.chart.height}
                  width={state.chart.width}
                />
              </div>
            </div>
          );
        });
    }
  };

  return (
    <Card className="card-browser-states">
      <CardHeader>
        <div>
          <CardTitle tag="h4">{heading}</CardTitle>
          <CardText className="font-small-2">{caption}</CardText>
        </div>
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  );
};

export default CardBrowserState;
