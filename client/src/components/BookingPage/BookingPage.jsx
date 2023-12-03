import { useLocation, useNavigate } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import CarRentalSearchForm from "../SearchForm/SearchForm";
import getAllFreeCars from "../../services/carService";
import { useEffect, useState } from "react";
import { PATHS } from "../../utils/routeConstants";
import * as bookingService from "../../services/bookingService";

export default function BookingPage() {
    const [cars, setCars] = useState([]);
    const [carId, setCarId] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state.formData;
    console.log(formData);

    useEffect(() => {
        getAllFreeCars(formData.pickUpDate)
            .then(result => setCars(result))
            .catch(err => console.log(err));
    }, []);
    console.log(cars);

    function handleCarSelect(carId){
        setCarId(carId);
        handleBooking();
    }

    const handleBooking = async () => {
        try {
            const bookingData = {
                carId: carId,
                vehicleType: formData.vehicleType,
                pickupLocation: formData.pickupLocation,
                returnLocation: formData.returnLocation,
                pickUpDate: formData.pickUpDate,
                pickUpTime: formData.pickUpTime,
                returnDate: formData.returnDate,
                returnTime: formData.returnTime,
            }
            await bookingService.createBooking(bookingData);
            console.log("Success");
        } catch (error) {
            console.log(error.message);
        }
        navigate(PATHS.HOME);
    }

    return (
        <>
        <CarRentalSearchForm />
        {cars.map(car => <CarCard car={car} onSelect={handleCarSelect} onClick={handleBooking} />)}
        </>
    );
}