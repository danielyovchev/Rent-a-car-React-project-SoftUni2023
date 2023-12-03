import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, ToggleButton, ToggleButtonGroup, InputGroup, FormControl } from 'react-bootstrap';
import { GeoAltFill } from 'react-bootstrap-icons';
import styles from "./SearchForm.module.css";
import { PATHS } from '../../utils/routeConstants';

function CarRentalSearchForm() {
    // State for form fields
    const [vehicleType, setVehicleType] = useState('cars');
    const [pickupLocation, setPickupLocation] = useState('');
    const [returnLocation, setReturnLocation] = useState('');
    const [showReturnLocation, setShowReturnLocation] = useState(false);
    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [validated, setValidated] = useState(false);

    // State for validation flags
    const [pickupLocationValid, setPickupLocationValid] = useState(true);
    const [returnLocationValid, setReturnLocationValid] = useState(true);
    const [pickUpDateValid, setPickUpDateValid] = useState(true);
    const [pickUpTimeValid, setPickUpTimeValid] = useState(true);
    const [returnDateValid, setReturnDateValid] = useState(true);
    const [returnTimeValid, setReturnTimeValid] = useState(true);

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;

        setPickupLocationValid(!!pickupLocation);
        setReturnLocationValid(!showReturnLocation || !!returnLocation);
        setPickUpDateValid(!!pickUpDate);
        setPickUpTimeValid(!!pickUpTime);
        setReturnDateValid(!!returnDate);
        setReturnTimeValid(!!returnTime);

        if (!pickupLocation || (showReturnLocation && !returnLocation) || !pickUpDate || !pickUpTime || !returnDate || !returnTime) {
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formValid = validateForm();
        setValidated(true);

        if (formValid) {
            const formData = {
                vehicleType,
                pickupLocation,
                returnLocation: showReturnLocation ? returnLocation : pickupLocation,
                pickUpDate,
                pickUpTime,
                returnDate,
                returnTime
            };
            navigate(PATHS.BOOK, { state: { formData } });
        }
    }

    return (
        <Container className={styles.formBack}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* Vehicle Type Selection */}
                <Row className="mb-3">
                    <Col>
                        <ToggleButtonGroup type="radio" name="vehicleType" value={vehicleType} onChange={setVehicleType}>
                            <ToggleButton id="tbg-btn-1" value={'cars'} variant="outline-secondary">Cars</ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={'trucks'} variant="outline-secondary">Trucks</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>

                {/* Pickup Location */}
                <Row className="mb-3">
                    <Col md={8}>
                        <InputGroup hasValidation>
                            <InputGroup.Text>
                                <GeoAltFill />
                            </InputGroup.Text>
                            <FormControl
                                required
                                isInvalid={!pickupLocationValid && validated}
                                placeholder="Pick-up location"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a pick-up location.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <Button
                            variant="outline-secondary"
                            onClick={() => setShowReturnLocation(!showReturnLocation)}>
                            + Different return location
                        </Button>
                    </Col>
                </Row>

                {/* Return Location */}
                {showReturnLocation && (
                    <Row className="mb-3">
                        <Col md={8}>
                            <InputGroup hasValidation>
                                <InputGroup.Text>
                                    <GeoAltFill />
                                </InputGroup.Text>
                                <FormControl
                                    placeholder="Return location"
                                    value={returnLocation}
                                    onChange={(e) => setReturnLocation(e.target.value)}
                                    isInvalid={!returnLocationValid && validated}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a return location.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                    </Row>
                )}

                {/* Date and Time Inputs */}
                <Row className="mb-3">
                    <Col xs={6} md={3}>
                        <FormControl
                            type="date"
                            value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)}
                            placeholder="Pick-up date"
                            isInvalid={!pickUpDateValid && validated}
                            className={validated && !pickUpDate ? 'is-invalid' : ''}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a pick-up date.
                        </Form.Control.Feedback>
                    </Col>
                    <Col xs={6} md={3}>
                        <FormControl
                            type="time"
                            value={pickUpTime}
                            onChange={(e) => setPickUpTime(e.target.value)}
                            placeholder="Pick-up time"
                            isInvalid={!pickUpTimeValid && validated}
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <FormControl
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            placeholder="Return date"
                            isInvalid={!returnDateValid && validated}
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <FormControl
                            type="time"
                            value={returnTime}
                            onChange={(e) => setReturnTime(e.target.value)}
                            placeholder="Return time"
                            isInvalid={!returnTimeValid && validated}
                        />
                    </Col>
                </Row>

                {/* Submit Button */}
                <Button variant="success" size="lg" type="submit">
                    Show cars
                </Button>
            </Form>
        </Container>
    );
}

export default CarRentalSearchForm;
