import { useState, useEffect } from "react";
import * as carService from '../../services/carService';
import CarCard from "../CarCard/CarCard";

export default function CarAdmin() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            {cars.map(car => <CarCard key={car._id} car={car}/>)}
        </>
    );
}