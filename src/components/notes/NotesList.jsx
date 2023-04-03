import { Alert, Col, Row, Spinner, Table } from "react-bootstrap";
import NotesTr from "../../components/notes/NoteTr";

function Note({ notes, loading, error }) {
  // If loading
  if (loading)
    return (
      <Col className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </Col>
    );

  // If error
  if (error)
    return (
      <Col className="d-flex justify-content-center">
        <Alert variant="primary">{error}</Alert>;
      </Col>
    );

  const tr = notes.map(({ id, desc }) => (
    <NotesTr key={id} id={id} desc={desc} />
  ));

  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Num</th>
              <th style={{ width: "80%" }}>Note</th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* All notes */}
            {tr}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Note;
