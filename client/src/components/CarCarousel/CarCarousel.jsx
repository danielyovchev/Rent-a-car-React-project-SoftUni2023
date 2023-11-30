import { useState, useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import styles from './CarCarousel.module.css';
import * as carService from '../../services/carService'
import CarCarouselCard from './CarCarouselCard';

export default function CarCarousel() {
    const [index, setIndex] = useState(0);
    const [cars, setCars] = useState([]);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        carService.getAll()
        .then(result => setCars(result))
        .catch(err => console.log(err))
    },[]);
    console.log(cars);
    return (
        <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
            {cars.map(car => 
            (<CarCarouselCard key={car._id} car={{...car}}/>))
            }
        </Carousel>
    );
}