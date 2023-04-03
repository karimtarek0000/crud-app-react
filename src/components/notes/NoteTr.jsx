import { Button, ButtonGroup } from "react-bootstrap";

function NoteTr({ id, desc }) {
  return (
    <tr className="text-center">
      <td>{id}</td>
      <td>{desc}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default NoteTr;
