import * as request from "../lib/request"
import { API_BASE_URL } from "../utils/routeConstants"

const baseUrl = `${API_BASE_URL}/cars`;

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}