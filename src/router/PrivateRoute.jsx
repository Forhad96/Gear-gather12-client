import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import Loader from "../shared/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;