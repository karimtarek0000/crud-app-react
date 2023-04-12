import { Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import guardAuth from "../../guard/guardAuth";

function Auth() {
  return (
    <>
      <Toaster toastOptions={{ duration: 5000 }} />
      <Container fluid>
        <div className="width-40 mx-auto height-100 d-flex flex-column justify-content-center">
          <h2 className="text-center mb-4">Notes App</h2>
          {/* Pages */}
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default guardAuth(Auth);
