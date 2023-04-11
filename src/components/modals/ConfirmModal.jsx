import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/globalSlice";
import { deleteNote } from "../../store/notesSlice";
import SubmitBtn from "../buttons/SubmitBtn";

function ConfirmModal() {
  const dispatch = useDispatch();
  const {
    status,
    title,
    desc,
    titleConfirm,
    reducerName,
    data = "",
  } = useSelector(({ globalSlice }) => globalSlice.modal);

  const reducers = { deleteNote };

  const closeHandler = () => dispatch(closeModal());
  const confirmHandler = async () => {
    await dispatch(reducers[reducerName](data)).unwrap();
    closeHandler();
  };

  return (
    <>
      <Modal show={status} onHide={closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeHandler}>
            Close
          </Button>

          <SubmitBtn
            title={titleConfirm}
            onClick={confirmHandler}
            classes="bg-danger"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
