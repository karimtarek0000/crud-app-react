import { Alert, Col, Spinner } from "react-bootstrap";

function Loading({ loading, error, children }) {
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
