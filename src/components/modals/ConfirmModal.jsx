import { Button, Modal } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/globalSlice";
import { deleteNote } from "../../store/notesSlice";
import SubmitBtn from "../buttons/SubmitBtn";

function ConfirmModal() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.notesSlice);
  const {
    status,
    title,
    desc,
    titleConfirm,
    data = "",
  } = useSelector(({ globalSlice }) => globalSlice.modal);

  const closeHandler = () => dispatch(closeModal());
  const confirmHandler = async () => {
    try {
      await dispatch(deleteNote(data)).unwrap();
      closeHandler();
      toast.success("Has been delete note successfully");
    } catch {
      toast.error("Error please try again!");
    }
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
            loading={loading}
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
