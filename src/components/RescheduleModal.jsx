import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateBooking } from "../features/bookings/bookingSlice";

export default function RescheduleModal({ show, handleClose, booking }) {
    const dispatch = useDispatch()
    const { id, title, description, date, time } = booking

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newDate, setNewDate] = useState(date)
    const [newTime, setNewTime] = useState(time)

    const handleReschedule = () => {
        dispatch(updateBooking({ newTitle, newDescription, newDate, newTime, id }))
        handleClose()
    }
    
    function formatDate(dateTimeString) {
        const date = new Date(dateTimeString);
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
  return (
    <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>Reschedule</Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Select value={newTitle} onChange={(e) => setNewTitle(e.target.value)} aria-label="Default select example" required>
                        <option>Select an appointment</option>
                        <option value="Doctor Colsultation">Doctor Colsultation</option>
                        <option value="Collect Medicine">Collect Medicine Dispense</option>
                        <option value="Blood Test">Blood Test</option>
                        <option value="X-Ray">X-Ray</option>
                    </Form.Select>
                    <Form.Control className="mt-4" type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Enter title" required />
                    <Form.Label className="mt-4">Select a date</Form.Label>
                    <Form.Control type="date" value={formatDate(newDate)} onChange={(e) => setNewDate(e.target.value)} required />
                    <Form.Label className="mt-4">Select a time</Form.Label>
                    <Form.Control type="time" value={newTime} onChange={(e) => setNewTime(e.target.value)} required />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="rounded-pill" onClick={handleReschedule}>Reschedule</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
