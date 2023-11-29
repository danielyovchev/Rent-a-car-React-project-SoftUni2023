import BookingForm from "../BookingForm/BookingForm";
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={styles.home}>
        <BookingForm />
        </div>
    );
}