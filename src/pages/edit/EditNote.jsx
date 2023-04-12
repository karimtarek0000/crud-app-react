import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import Loading from "../../components/loading/Loading";
import useNoteDetails from "../../hooks/useNoteDetails";
import { cleanRecord, updateNote } from "../../store/notesSlice";

function EditNote() {
  const navigate = useNavigate();
  const record = useNoteDetails();
  const { loading } = useSelector((state) => state.notesSlice);

  const [titleNote, setTitleNote] = useState("");
  const [descNote, setDescNote] = useState("");
  const [stopLoading, setStopLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (record) {
      const { title, desc } = record;
      setTitleNote(title || "");
      setDescNote(desc || "");
    }
  }, [record]);

  useEffect(() => {
    return () => dispatch(cleanRecord());
  }, [dispatch]);

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
      setStopLoading(false);

      await dispatch(
        updateNote({ ...record, title: titleNote, desc: descNote })
      ).unwrap();

      navigate("/");
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <Loading stop={stopLoading}>
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

        <SubmitBtn
          loading={loading}
          title="Edit note"
          disabled={statusDisabledSubmit()}
        />
      </Form>
    </Loading>
  );
}

export default EditNote;
