import { Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function SubmitBtn({ title, onClick = null, disabled = false, classes }) {
  const { loading } = useSelector((state) => state.notesSlice);

  return (
    <Button
      variant="primary"
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {loading ? (
        <Spinner size="sm" animation="border" variant="light" />
      ) : (
        title
      )}
    </Button>
  );
}

export default SubmitBtn;
