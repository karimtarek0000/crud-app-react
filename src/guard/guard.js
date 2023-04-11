import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Best way to guard pages
const guard = (Component) => {
  const Wrapper = (props) => {
    const { auth } = useSelector((state) => state.globalSlice);

    return auth ? <Component {...props} /> : <Navigate to="/login" />;
  };
  return Wrapper;
};

export default guard;
