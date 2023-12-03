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

export const getAllForUser = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: `car=carId:cars`,
        sortBy: `_createdOn`,
    });

    return await request.get(`${baseUrl}?${query} desc`)
}

export const createBooking = async (data) => {
    await request.post(baseUrl, data);
}

export const cancelBooking = async (bookingId) => {
    await request.remove(`${baseUrl}/${bookingId}`);
}