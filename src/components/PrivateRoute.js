import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute(data) {
  // if else, ternary, &&
  return <>{!data.isLogin ? <Navigate to="/signin" /> : <Outlet />}</>;
}

export default PrivateRoute;
