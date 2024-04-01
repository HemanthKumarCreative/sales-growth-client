// ** React Imports
import { useContext } from "react";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";

// ** Demo Components
import CompanyTable from "./CompanyTable";
import Earnings from "@src/views/ui-elements/cards/analytics/Earnings";
import CardMedal from "@src/views/ui-elements/cards/advance/CardMedal";
import CardMeetup from "@src/views/ui-elements/cards/advance/CardMeetup";
import StatsCard from "@src/views/ui-elements/cards/statistics/StatsCard";
import GoalOverview from "@src/views/ui-elements/cards/analytics/GoalOverview";
import RevenueReport from "@src/views/ui-elements/cards/analytics/RevenueReport";
import OrdersBarChart from "@src/views/ui-elements/cards/statistics/OrdersBarChart";
import CardTransactions from "@src/views/ui-elements/cards/advance/CardTransactions";
import ProfitLineChart from "@src/views/ui-elements/cards/statistics/ProfitLineChart";
import CardBrowserStates from "@src/views/ui-elements/cards/advance/CardBrowserState";
import ExpenseLineChart from "../../ui-elements/cards/statistics/ExpenseLineChart";
import ExpenseBarChart from "../../ui-elements/cards/statistics/ExpenseBarChart";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";

const EcommerceDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors);

  // ** vars
  const trackBgColor = "#e9ecef";

  return (
    <div id="dashboard-ecommerce">
      <Row className="match-height">
        <Col xl="9" lg="9" md="12" sm="12" xs="12">
          <StatsCard cols={{ md: "3", sm: "6", xs: "12" }} />
        </Col>
        <Col xl="3" lg="3" md="12" sm="12" xs="12">
          <OrdersBarChart warning={colors.warning.main} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="4" md="12">
          <Row className="match-height">
            <Col lg="12" md="6" xs="12">
              <ExpenseBarChart warning={colors.success.main} />
            </Col>
            <Col lg="12" md="6" xs="12">
              <Earnings success={colors.success.main} />
            </Col>
          </Row>
        </Col>
        <Col lg="8" md="12">
          <RevenueReport
            primary={colors.primary.main}
            warning={colors.warning.main}
          />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="8" xs="12">
          <CompanyTable />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardBrowserStates
            colors={colors}
            trackBgColor={trackBgColor}
            heading="Most Sold Products"
            caption="Counter August 2020"
            type="top products"
          />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardBrowserStates
            colors={colors}
            trackBgColor={trackBgColor}
            heading="Browser States"
            caption="Counter August 2020"
            type="browser"
          />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardTransactions />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardBrowserStates
            colors={colors}
            trackBgColor={trackBgColor}
            heading="Least Sold Products"
            caption="Counter August 2020"
            type="bottom products"
          />
        </Col>
      </Row>
    </div>
  );
};

export default EcommerceDashboard;
