import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const guard = (Component) => {
  const Wrapper = (props) => {
    const { token, userData, loggedIn } = useSelector(
      (state) => state.authSlice
    );

    return token && userData && loggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to="/auth" />
    );
  };
  return Wrapper;
};

export default guard;
