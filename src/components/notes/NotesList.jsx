import { Button, ButtonGroup, Col, Row, Table } from "react-bootstrap";

function Note({ notes }) {
  console.log("From notes list: ", notes);
  return (
    <Row>
      <Col>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Num</th>
              <th style={{ width: "80%" }}>Note</th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>this is title 1</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="success">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Note;
