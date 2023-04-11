import { Alert, Col, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function Loading({ children, stop = true }) {
  const { loading, error } = useSelector((state) => state.notesSlice);

  // If loading
  if (loading && stop)
    return (
      <Col className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </Col>
    );

  // If error
  if (error && stop)
    return (
      <Col className="d-flex justify-content-center">
        <Alert variant="primary">{error}</Alert>;
      </Col>
    );

  return <>{children}</>;
}

export default Loading;
