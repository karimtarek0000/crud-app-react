import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import { addNote } from "../../store/notesSlice";

function AddNote() {
  const navigate = useNavigate();
  const [titleNote, setTitleNote] = useState("");
  const [descNote, setDescNote] = useState("");
  const dispatch = useDispatch();

  const changeTitleNoteHandler = (e) => {
    setTitleNote(e.target.value);
  };
  const changeNoteDescriptionHandler = (e) => {
    setDescNote(e.target.value);
  };

  const statusDisabledSubmit = () => {
    return !!!(titleNote && descNote);
  };

  const addNoteHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addNote({ title: titleNote, desc: descNote })).unwrap();
      navigate("/");
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <>
      <Form onSubmit={addNoteHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title note</Form.Label>
          <Form.Control
            value={titleNote}
            name="note"
            onChange={changeTitleNoteHandler}
            type="text"
            placeholder="Title note"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description note</Form.Label>
          <Form.Control
            value={descNote}
            name="description"
            onChange={changeNoteDescriptionHandler}
            type="text"
            as="textarea"
            placeholder="Write note"
          />
        </Form.Group>

        <SubmitBtn title="Add note" disabled={statusDisabledSubmit()} />
      </Form>
    </>
  );
}

export default AddNote;
