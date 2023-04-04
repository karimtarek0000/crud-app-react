import { memo } from "react";
import { Col, Row, Table } from "react-bootstrap";
import NotesTr from "../../components/notes/NoteTr";

function Note({ notes, deleteHandler }) {
  const tr = notes.map(({ id, desc }) => (
    <NotesTr key={id} id={id} desc={desc} deleteNote={deleteHandler} />
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

export default memo(Note);
