import { useState, useEffect } from "react";
import * as carService from '../../services/carService';
import CarAdminCard from "./CarAdminCard/CarAdminCard";
import { toast } from 'react-toastify';
import CarModal from "./CarModal/CarModal";

export default function CarAdmin() {
    const [cars, setCars] = useState([]);
    const [carId, setCarId] = useState('');
    const [currentCar, setCurrentCar] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => console.log(err))
    }, []);


    const editHandler = (carId) => {
        setCarId(carId);
        setCurrentCar(cars.find(car => car._id === carId));
        setShowModal(true);
    }

    const saveCarHandler = (updatedCar) => {
        carService.updateCar(currentCar._id, updatedCar)
            .then(() => {
                setCars(prevCars => prevCars.map(car => car._id === currentCar._id ? updatedCar : car));
                setShowModal(false);
                toast.success("Car updated successfully!");
            })
            .catch(err => {
                toast.error("Update failed!");
                console.error(err);
            });
        setShowModal(false);
    };


    const deleteHandler = (carId) => {
        try {
            carService.removeCar(carId)
            .then(() => {
                setCars(prevCars => prevCars.filter(car => car._id !== carId));
                toast.success(`Car with id ${carId} was deleted!`, {
                    position: "top-center",
                    autoClose: 2000,
                });
            });
            
        } catch (error) {
            toast.success(`Car with id ${carId} was not deleted!`, {
                position: "top-center",
                autoClose: 3000,
            });
        }
        
    }

    const closeModalHandler = () => {
        setShowModal(false);
    };

    return (
        <>
            {cars.map(car => <CarAdminCard key={car._id} car={car} onEdit={editHandler} onDelete={deleteHandler} />)}
            {showModal && currentCar && (
                <CarModal key={car._id}
                    car={currentCar}
                    show={showModal}
                    handleClose={closeModalHandler}
                    onSave={saveCarHandler}
                />
            )}
        </>
    );
}