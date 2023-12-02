import * as request from "../lib/request"
import { API_BASE_URL } from "../utils/routeConstants"
import * as bookingService from "./bookingService";

const baseUrl = `${API_BASE_URL}/cars`;

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}

export default async function getAllFreeCars(startDate) {
    try {
        // Get all bookings for the period
        const bookingsData = await bookingService.getAll();

        let bookedCarIds = [];
        if (Array.isArray(bookingsData)) {
            bookedCarIds = bookingsData
            .filter(booking => booking.startDate >= startDate)
            .map(booking => booking.carId);
        }

        // Get all cars
        const allCars = await getAll();
        
        // Filter out booked cars
        const freeCars = allCars.filter(car => !bookedCarIds.includes(car._id));
        return freeCars;

    } catch (error) {
        console.error('Error processing data:', error);
        return []; // Return an empty array in case of error.
    }
}