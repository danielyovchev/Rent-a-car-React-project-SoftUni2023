import { useLocation } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import CarRentalSearchForm from "../SearchForm/SearchForm";
import getAllFreeCars from "../../services/carService";
import { useEffect, useState } from "react";

export default function BookingPage() {
    const [cars, setCars] = useState([]);
    const [id, setID] = useState('');
    const location = useLocation();
    const formData = location.state.formData;
    console.log(formData);

    useEffect(() => {
        getAllFreeCars(formData.pickUpDate)
            .then(result => setCars(result))
            .catch(err => console.log(err));
    }, []);
    console.log(cars);

    function handleCarSelect(carId){
        setID(carId);
    }

    return (
        <>
        <CarRentalSearchForm />
        {cars.map(car => <CarCard car={car} onSelect={handleCarSelect} />)}
        </>
    );
}