import { Button, Container } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5 display-5">
      <h3>👋</h3>
      <p>Sorr'y has unexpect error</p>
      <p>{error.status}</p>
      <p>{error.message || error.statusText}</p>
      <Button onClick={() => navigate("/", { replace: true })}>
        Go to home 😃
      </Button>
    </Container>
  );
}

export default NotFound;
