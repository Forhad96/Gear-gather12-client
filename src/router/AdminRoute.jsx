import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCheckRole from "../hooks/useCheckRole";
import Loader from "../shared/Loader/Loader";

const AdminRoute = ({children}) => {
    const { userInfo, loading: isCheckRoleLoading } = useCheckRole();
    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading || isCheckRoleLoading){
        return <Loader></Loader>
    }
if (user && userInfo?.role === "admin" || userInfo?.role === "moderator"){
    return children;
}
  return <Navigate to='/login' state={location?.pathname}></Navigate>
// return <Error></Error>
};

import PropTypes from 'prop-types';
import Error from "../pages/Error/Error";

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AdminRoute;