import { Alert, Col, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function Loading({ children }) {
  const { loading, error } = useSelector((state) => state.notesSlice);

  // If loading
  if (loading)
    return (
      <Col className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </Col>
    );

  // If error
  if (error)
    return (
      <Col className="d-flex justify-content-center">
        <Alert variant="primary">{error}</Alert>;
      </Col>
    );

  return <>{children}</>;
}

export default Loading;
