import styles from "./BookingCard.module.css";

export default function BookingCard({ booking, onCancel }) {
    const handleCancelClick = () => {
        onCancel(booking._id);
    }
    return (
        <div className={styles.bookingCard}>
            <h3>{booking.car.model}</h3>
            <div className={styles.carImageContainer}>
                <img className={styles.carImage} src={booking.car.imgUrl} alt={booking.car.carModel} />
            </div>
            <div className={styles.reservationDetails}>

                <div className="info-column">
                    <p>Pick up date: {booking.pickUpDate}</p>
                    <p>Return date: {booking.returnDate}</p>
                </div>
                <div className="info-column">
                    <p>Pick up from: {booking.pickupLocation}</p>
                    <p>Return location: {booking.returnLocation}</p>
                </div>
                <div className="info-column">
                    <p>Price: {booking.totalPrice}</p>
                </div>
                <button>Review</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </div>
        </div>
    );
}