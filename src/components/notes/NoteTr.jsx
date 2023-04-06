import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openModal } from "../../states/globalSlice";

function NoteTr({ note }) {
  const { id, title, desc } = note;

  const dispatch = useDispatch();

  const deleteHandler = () => {
    const dataModal = {
      status: true,
      title: "Delete a Note",
      desc: `You want delete note equal id #${id} ?`,
      titleConfirm: "Delete",
      reducerName: "deleteNote",
      data: id,
    };
    dispatch(openModal(dataModal));
  };

  return (
    <tr className="text-center">
      <td className="text-start">
        <h3>{title}</h3>
        <p>{desc}</p>
      </td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger" onClick={deleteHandler}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default NoteTr;
