import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../states/globalSlice";

function NoteTr({ note }) {
  const { id, title, desc } = note;

  const dispatch = useDispatch();

  const deleteHandler = () => {
    const dataModal = {
      status: true,
      title: "Delete Note",
      desc: `You want delete note ${title} ?`,
      titleConfirm: "Delete",
      reducerName: "deleteNote",
      data: id,
    };
    dispatch(openModal(dataModal));
  };

  return (
    <tr className="text-center">
      <td className="text-start">
        <h3>
          <Link className="no-underline" to={`note/${id}`}>
            {title}
          </Link>
        </h3>
        <p className="truncate">{desc}</p>
      </td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success" as={Link} to={`note/edit/${id}`}>
            Edit
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default NoteTr;
