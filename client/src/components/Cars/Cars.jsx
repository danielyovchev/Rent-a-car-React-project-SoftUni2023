import { useEffect, useState } from "react";
import { getAll } from "../../services/carService";
import CarCard from "../CarCard/CarCard";

export default function Cars() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getAll()
            .then(result => setCars(result))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="carsMain">
            <h2>Our fleet</h2>
            {/* {cars.map(car => <CarCard key={car._id} />)} */}
        </div>
    );
}