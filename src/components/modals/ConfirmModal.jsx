import { Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../states/globalSlice";
import { deleteNote } from "../../states/notesSlice";

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
  const { loading } = useSelector((state) => state.notesSlice);

  const reducers = { deleteNote };

  const closeHandler = () => dispatch(closeModal());
  const confirmHandler = () => dispatch(reducers[reducerName](data));

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
          <Button variant="danger" onClick={confirmHandler}>
            {loading ? (
              <Spinner size="sm" animation="border" variant="light" />
            ) : (
              titleConfirm
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
