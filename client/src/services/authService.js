import * as request from '../lib/request';
import { USERS_BASE_URL } from '../utils/routeConstants';

export const login = async (email, password) => {
    const result = await request.post(`${USERS_BASE_URL}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, password) => request.post(`${USERS_BASE_URL}/register`, {
    email,
    password,
});

export const logout = () => request.get(`${USERS_BASE_URL}/logout`);