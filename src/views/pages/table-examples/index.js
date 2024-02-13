// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Demo Components
import ShowTableExample from "./ShowTable";
import { HotTableExample } from "./HotTable/HotTable";
import Handsontable from "./HandsOnTable";

const TableExamples = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Table Examples"
        data={[{ title: "Pages" }, { title: "Table Examples" }]}
      />
      <Row className="match-height">
        <Col md="4">
          <ShowTableExample
            Table={Handsontable}
            tableName="Data Grid Table"
            caption="Complex grid table configured using hands on table"
          />
        </Col>
        <Col md="4">
          <ShowTableExample
            Table={HotTableExample}
            tableName="Hot Table"
            caption="Simple table configured using hands on table"
          />
        </Col>
        <Col md="4">
          <ShowTableExample
            Table={HotTableExample}
            tableName="Hot Table"
            caption="Simple table configured using hands on table"
          />
        </Col>
        <Col md="4">
          <ShowTableExample
            Table={HotTableExample}
            tableName="Hot Table"
            caption="Simple table configured using hands on table"
          />
        </Col>
        <Col md="4">
          <ShowTableExample
            Table={HotTableExample}
            tableName="Hot Table"
            caption="Simple table configured using hands on table"
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default TableExamples;
