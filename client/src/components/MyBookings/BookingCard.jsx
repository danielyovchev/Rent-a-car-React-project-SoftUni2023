import styles from "./BookingCard.module.css";

export default function BookingCard({ booking }) {
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

                </div>

                <button>Modify</button>
                <button>Cancel</button>

            </div>
        </div>
    );
}