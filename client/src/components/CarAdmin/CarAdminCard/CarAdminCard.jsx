import style from './CarAdminCard.module.css';

export default function CarAdminCard({ car, onEdit, onDelete}){
    return (
        <div className={style.carCard}>
            <div className={style.carImage}>
                <img src={car.imgUrl} alt={car.model} />
            </div>
            <div className={style.carDetails}>
                <h2>{car.model}</h2>
                <div className={style.carInfo}>
                    <p>{car.type}</p>
                    <p>{car.transmission}</p>
                    <p>{car.capacity} People</p>
                    <p>{car.bags} Bags</p>
                </div>
                <div className={style.carPricing}>
                    <p>${car.price.toFixed(2)} Per Day</p>
                </div>
                <button onClick={() => onEdit(car._id)}>Edit</button>
                <button onClick={() => onDelete(car._id)}>Delete</button>
            </div>
        </div>
    );
}