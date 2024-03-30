// ** Third Party Components
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import { Card, CardBody } from "reactstrap";

const TinyChartStats = (props) => {
  // ** Props
  const { title, stats, options, series, type, height } = props;

  return (
    <Card className="card-tiny-line-stats">
      <CardBody className="pb-50">
        <div className="d-flex flex-row justify-content-between align-items-baseline">
          <h6>{title}</h6>
          <h2 className="fw-bolder mb-1">{stats}</h2>
        </div>
        <Chart options={options} series={series} type={type} height={height} />
      </CardBody>
    </Card>
  );
};

export default TinyChartStats;

// ** PropTypes
TinyChartStats.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};

// ** Default Props
TinyChartStats.defaultProps = {
  height: 100,
};
