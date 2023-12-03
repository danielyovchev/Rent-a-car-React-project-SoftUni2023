import * as request from "../lib/request"
import { API_BASE_URL } from "../utils/routeConstants"
import * as bookingService from "./bookingService";

const baseUrl = `${API_BASE_URL}/cars`;

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}

export default async function getAllFreeCars(startDate, endDate) {
    try {
        const bookingsData = await bookingService.getAll();

        let bookedCarIds = [];
        if (Array.isArray(bookingsData)) {
            bookedCarIds = bookingsData
            .filter(booking => !(booking.pickUpDate > endDate || booking.returnDate < startDate))
            .map(booking => booking.carId);
        }

        const allCars = await getAll();
        
        const freeCars = allCars.filter(car => !bookedCarIds.includes(car._id));
        return freeCars;

    } catch (error) {
        console.error('Error processing data:', error);
        return [];
    }
}