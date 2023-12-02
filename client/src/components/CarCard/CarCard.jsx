import style from './CarCard.module.css'

export default function CarCard({ car, onSelect }) {
    console.log(car);
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
                <button onClick={() => onSelect(car._id)}>Select</button>
            </div>
        </div>
    );
}