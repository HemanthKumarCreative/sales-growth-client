// ** React Imports
import { Fragment, useState } from "react";

// ** Reactstrap Imports
import {
  Card,
  Button,
  Modal,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
} from "reactstrap";

// ** Third Party Components
import { FileText } from "react-feather";

const ShowTableExample = ({ Table, tableName, caption }) => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Card>
        <CardBody className="text-center">
          <FileText className="font-large-2 mb-1" />
          <CardTitle tag="h5">{tableName}</CardTitle>
          <CardText>{caption}</CardText>
          <Button color="primary" onClick={() => setShow(true)}>
            Show
          </Button>
        </CardBody>
      </Card>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader className="bg-transparent" toggle={() => setShow(!show)} />
        <ModalBody className="px-sm-5 mx-50 pb-4">
          <h1 className="text-center mb-1">{tableName}</h1>
          <p className="text-center">{caption}</p>
          <Table />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default ShowTableExample;
