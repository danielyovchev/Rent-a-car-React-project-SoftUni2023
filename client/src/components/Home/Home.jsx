import BookingForm from "../BookingForm/BookingForm";
import CarCarousel from "../CarCarousel/CarCarousel";
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={styles.home}>
            <BookingForm />
            <CarCarousel />
        </div>
    );
}