import { Button, Spinner } from "react-bootstrap";

function SubmitBtn({ loading, title, onClick = null, disabled = false, classes }) {
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
