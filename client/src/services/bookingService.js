import * as request from "../lib/request"
import { API_BASE_URL } from "../utils/routeConstants"

const baseUrl = `${API_BASE_URL}/bookings`;

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}

export const getAllForPeriod = async (startDate) => {
    console.log(startDate);
    try {
        const result = await request.get(`${baseUrl}?where=startDate=${startDate}`);
        return result;
    } catch (error) {
        return [];
    }
}

export const createBooking = async (data) => {
    await request.post(baseUrl, data);
}