import style from './CarAdminCard.module.css';
import { FaCar, FaCogs, FaUsers, FaSuitcase } from 'react-icons/fa';


export default function CarAdminCard({ car, onEdit, onDelete }) {
    return (
        <div className={style.carCard}>
            <div className={style.carImage}>
                <img src={car.imgUrl} alt={car.model} />
            </div>
            <div className={style.carDetails}>
                <h2>{car.model}</h2>
                <div className={style.carInfo}>
                    <p><FaCar /> {car.type}</p>
                    <p><FaCogs /> {car.transmission}</p>
                    <p><FaUsers /> {car.capacity} People</p>
                    <p><FaSuitcase /> {car.bags} Bags</p>
                </div>
                <div className={style.carPricing}>
                    <p>${car.price.toFixed(2)} Per Day</p>
                </div>
                <button className={style.btn} onClick={() => onEdit(car._id)}>Edit</button>
                <button className={style.btn} onClick={() => onDelete(car._id)}>Delete</button>
            </div>
        </div>
    );
}