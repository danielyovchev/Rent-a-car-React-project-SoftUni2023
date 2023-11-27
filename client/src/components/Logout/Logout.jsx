import { useNavigate } from "react-router-dom";
import {useContext, useEffect} from "react";
import AuthContext from "../../contexts/AuthContext";
import * as authService from '../../services/authService';
import { PATHS } from "../../utils/routeConstants";

export default function Logout() {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);
    useEffect(() => {
        authService.logout()
        .then(() => {
            logoutHandler();
            navigate(PATHS.HOME);
        })
        .catch(() => console.log("error"));
    });
    return null;
}