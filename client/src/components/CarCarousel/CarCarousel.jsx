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
    }, []);
    return (
        <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
            {cars.map(car =>
                <Carousel.Item key={car._id}>
                    <Card>
                        <Card.Img variant="top" src={car.imgUrl} />
                        <Card.Body>
                            <Card.Title>{car.model}</Card.Title>
                            <Card.Text>{car.type}</Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                //(<CarCarouselCard key={car._id} car={{...car}}/>)
            )}
        </Carousel>
    );
}