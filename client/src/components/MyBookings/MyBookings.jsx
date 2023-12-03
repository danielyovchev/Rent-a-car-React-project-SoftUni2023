import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext"
import * as bookingService from "../../services/bookingService"
import BookingCard from "./BookingCard";

export default function MyBookings() {
    const { userId } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        bookingService.getAllForUser(userId)
            .then(bookings => setBookings(bookings))
            .catch(error => console.log(error));
    }, [userId]);

    return (
        <>
            {bookings.map(booking => (
                <BookingCard key={booking._id} booking={booking}/>
            ))}
        </>

    );
}