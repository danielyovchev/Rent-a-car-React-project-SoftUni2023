import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext"
import * as bookingService from "../../services/bookingService"
import BookingCard from "./BookingCard";
import { toast } from "react-toastify";

export default function MyBookings() {
    const { userId } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        bookingService.getAllForUser(userId)
            .then(bookings => setBookings(bookings))
            .catch(error => console.log(error));
    }, [userId]);

    const cancelBooking = (bookingId) => {
        if (bookingId) {
            bookingService.cancelBooking(bookingId)
                .then(() => {
                    setBookings(bookings.filter(booking => booking._id !== bookingId));
                    toast.success('Booking cancelled successfully');
                })
                .catch(error => toast.error(error));
        }
        setCurrentPage(1);
    }

    return (
        <>
            {bookings.map(booking => (
                <BookingCard key={booking._id} booking={booking} onCancel={cancelBooking} />
            ))}
        </>
    );
}