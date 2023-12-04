import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import { PATHS } from '../utils/routeConstants';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(-1);
        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 4000,
            });
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values.email, values.password);

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(-2);
        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 3000,
            })
        }

    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;