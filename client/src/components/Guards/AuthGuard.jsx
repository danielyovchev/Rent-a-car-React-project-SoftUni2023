import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../utils/routeConstants";

export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={PATHS.LOGIN} />;
    }
    return <Outlet />;
}