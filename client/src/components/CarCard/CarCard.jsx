import style from './CarCard.module.css';
import { FaCar, FaCogs, FaUsers, FaSuitcase } from 'react-icons/fa';

export default function CarCard({ car, onSelect }) {
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
                {onSelect === null ? '' : <button onClick={() => onSelect(car._id)}>Book now</button>}
            </div>
        </div>
    );
}