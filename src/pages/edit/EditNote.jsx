import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import Loading from "../../components/loading/Loading";
import useNoteDetails from "../../hooks/useNoteDetails";
import { updateNote } from "../../states/notesSlice";

function EditNote() {
  const navigate = useNavigate();
  const record = useNoteDetails();

  const [titleNote, setTitleNote] = useState("");
  const [descNote, setDescNote] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (record && !titleNote && !descNote) {
      const { title, desc } = record;
      setTitleNote(title || "");
      setDescNote(desc || "");
    }
  }, [record, titleNote, descNote]);

  const changeTitleNoteHandler = (e) => {
    setTitleNote(e.target.value);
  };
  const changeNoteDescriptionHandler = (e) => {
    setDescNote(e.target.value);
  };

  const statusDisabledSubmit = () => {
    return !!!(titleNote && descNote);
  };

  const editNoteHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        updateNote({ ...record, title: titleNote, desc: descNote })
      ).unwrap();
      navigate("/");
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <Loading>
      <Form onSubmit={editNoteHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title note</Form.Label>
          <Form.Control
            value={titleNote}
            onChange={changeTitleNoteHandler}
            type="text"
            placeholder="Title note"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description note</Form.Label>
          <Form.Control
            value={descNote}
            onChange={changeNoteDescriptionHandler}
            type="text"
            as="textarea"
            placeholder="Write note"
          />
        </Form.Group>

        <SubmitBtn title="Edit note" disabled={statusDisabledSubmit()} />
      </Form>
    </Loading>
  );
}

export default EditNote;
