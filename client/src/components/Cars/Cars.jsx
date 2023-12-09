import { useEffect, useState } from "react";
import * as carService from '../../services/carService';
import CarCard from "../CarCard/CarCard";
import styles from "./Cars.module.css"

export default function Cars() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            <div className={styles.carsMain}>
                <h2>Our fleet</h2>
            </div>
            <div>
                {cars.map(car => <CarCard key={car._id} car={car} onSelect={null}/>)}
            </div>
        </>


    );
}