import { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import styles from './CarCarousel.module.css';
//import ExampleCarouselImage from '../../assets/images/car-bg.webp';

export default function CarCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
            {/* First Slide */}
            <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/600x250?text=First+Slide" />
                    <Card.Body>
                        <Card.Title>Card Title 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/600x250?text=Second+Slide" />
                    <Card.Body>
                        <Card.Title>Card Title 2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            {/* Third Slide */}
            <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/600x250?text=Third+Slide" />
                    <Card.Body>
                        <Card.Title>Card Title 3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
    );
}