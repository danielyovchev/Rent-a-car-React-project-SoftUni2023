import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Outlet } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

export default function AdminGuard(props){
    const {isAdmin} = useContext(AuthContext);

    if(!isAdmin){
        return <NotFound />
    }
    
    return <Outlet />;
}