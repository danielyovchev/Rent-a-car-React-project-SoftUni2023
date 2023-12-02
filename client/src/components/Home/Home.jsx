import CarRentalSearchForm from "../SearchForm/SearchForm";
import CarCarousel from "../CarCarousel/CarCarousel";
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={styles.home}>
            <CarRentalSearchForm />
            <CarCarousel />
        </div>
    );
}