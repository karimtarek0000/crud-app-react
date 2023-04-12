import { memo } from "react";
import { Col, Row, Table } from "react-bootstrap";
import NotesTr from "../../components/notes/NoteTr";

function Note({ notes }) {
  const tr = notes.map((note) => <NotesTr key={note.id} note={note} />);

  return (
    <Row>
      {notes.length ? (
        <Col className="d-flex justify-content-center">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "80%" }} className="text-start">
                  Note
                </th>
                <th style={{ width: "10%" }} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* All notes */}
              {tr}
            </tbody>
          </Table>
        </Col>
      ) : (
        <h3 className="text-center">No there any note yet!</h3>
      )}
    </Row>
  );
}

export default memo(Note);
