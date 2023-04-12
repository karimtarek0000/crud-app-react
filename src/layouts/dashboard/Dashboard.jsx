import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import ConfirmModal from "../../components/modals/ConfirmModal";
import guard from "../../guard/guard";

function Dashboard() {
  return (
    <>
      <ConfirmModal />

      <Container>
        <Header />
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default guard(Dashboard);
