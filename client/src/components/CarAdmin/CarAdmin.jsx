import { useState, useEffect } from "react";
import * as carService from '../../services/carService';
import CarAdminCard from "./CarAdminCard/CarAdminCard";

export default function CarAdmin() {
    const [cars, setCars] = useState([]);
    const [carId, setCarId] = useState('');

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => console.log(err))
    }, []);

    // const handleCarSelect = (carId) => {
    //     setCarId(carId);
    // }

    const editHandler = (carId) => {
        setCarId(carId);
    }

    const deleteHandler = (carId) => {
        setCarId(carId);
    }

    return (
        <>
            {cars.map(car => <CarAdminCard key={car._id} car={car} onEdit={editHandler} onDelete={deleteHandler}/>)}
        </>
    );
}