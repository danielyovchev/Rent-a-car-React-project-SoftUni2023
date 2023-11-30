import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

export default function CarCarouselCard({ car }) {
    return (
        <div>
            <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src={car.imgUrl} />
                    <Card.Body>
                        <Card.Title>{car.model}</Card.Title>
                        <Card.Text>{car.type}</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </div>
    );
};

