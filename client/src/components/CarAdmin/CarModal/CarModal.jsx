import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function CarModal({ show, handleClose, car, onSave }) {

    const [model, setModel] = useState(car.model);
    const [transmission, setTransmission] = useState(car.transmission);
    const [capacity, setCapacity] = useState(car.capacity);
    const [bags, setBags] = useState(car.bags);
    const [year, setYear] = useState(car.year);
    const [type, setType] = useState(car.type);
    const [description, setDescription] = useState(car.description);
    const [imgUrl, setImgUrl] = useState(car.imgUrl);
    const [price, setPrice] = useState(car.price);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            model,
            transmission,
            capacity,
            bags,
            year,
            type,
            description,
            imgUrl,
            price,
        });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Car</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                            type="text"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Transmission</Form.Label>
                        <Form.Control
                            type="text"
                            value={transmission}
                            onChange={(e) => setTransmission(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control
                            type="text"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Bags</Form.Label>
                        <Form.Control
                            type="text"
                            value={bags}
                            onChange={(e) => setBags(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>year</Form.Label>
                        <Form.Control
                            type="text"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            type="text"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>ImgUrl</Form.Label>
                        <Form.Control
                            type="text"
                            value={capacity}
                            onChange={(e) => setImgUrl(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>
                    {/* Repeat for other fields */}
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}