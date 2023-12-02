import { useState } from 'react';

import { Form, Button, Container, Row, Col, ToggleButton, ToggleButtonGroup, InputGroup, FormControl } from 'react-bootstrap';
import { GeoAltFill } from 'react-bootstrap-icons';

import  getAllFreeCars, * as carService from '../../services/carService'
import styles from "./SearchForm.module.css";
import { PATHS } from '../../utils/routeConstants';

function CarRentalSearchForm() {
    const [vehicleType, setVehicleType] = useState('cars');
    const [pickupLocation, setPickupLocation] = useState('');
    const [returnLocation, setReturnLocation] = useState('');
    const [showReturnLocation, setShowReturnLocation] = useState(false);
    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(getAllFreeCars(pickUpDate));
        navigate(PATHS.BOOK);
    }

    return (
        <Container className={styles.formBack}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <ToggleButtonGroup type="radio" name="vehicleType" value={vehicleType} onChange={setVehicleType}>
                            <ToggleButton id="tbg-btn-1" value={'cars'} variant="outline-secondary">Cars</ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={'trucks'} variant="outline-secondary">Trucks</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={8}>
                        <InputGroup>
                            <InputGroup.Text>
                                <GeoAltFill />
                            </InputGroup.Text>
                            <FormControl
                                placeholder="Pick-up location"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                            />
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <Button
                            variant="outline-secondary"
                            onClick={() => setShowReturnLocation(!showReturnLocation)}
                        >
                            + Different return location
                        </Button>
                    </Col>
                </Row>

                {/* Conditionally Render Return Location */}
                {showReturnLocation && (
                    <Row className="mb-3">
                        <Col md={8}>
                            <InputGroup>
                                <InputGroup.Text>
                                    <i className="bi bi-geo-alt-fill"></i> {/* Icon */}
                                </InputGroup.Text>
                                <FormControl
                                    placeholder="Return location"
                                    value={returnLocation}
                                    onChange={(e) => setReturnLocation(e.target.value)}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                )}
                <Row className="mb-3">
                    <Col xs={6} md={3}>
                        <FormControl
                            type="date"
                            value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)}
                            placeholder="Pick-up date"
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <FormControl
                            type="time"
                            value={pickUpTime}
                            onChange={(e) => setPickUpTime(e.target.value)}
                            placeholder="Pick-up time"
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <FormControl
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            placeholder="Return date"
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <FormControl
                            type="time"
                            value={returnTime}
                            onChange={(e) => setReturnTime(e.target.value)}
                            placeholder="Return time"
                        />
                    </Col>
                </Row>
                <Button variant="success" size="lg" type="submit">
                    Show cars
                </Button>
            </Form>
        </Container>
    );
}

export default CarRentalSearchForm;
