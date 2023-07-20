// import { useState } from "react";
import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveBooking } from "../features/bookings/bookingSlice";
import { AuthContext } from "./AuthProvider";

export default function BookingModal({ show, handleClose }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const dispatch = useDispatch()
    const { currentUser } = useContext(AuthContext)

    const handleClick = () => {
        console.log(description)
        const userId = currentUser.uid
        const obj = {title, description, date, time, userId}
        dispatch(saveBooking(obj))
        handleClose()
        setTitle("")
        setDescription("")
        setDate("")
        setTime("")
    }
    return (
    <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>You sick? Skill issue tbh... gitgud by booking now</Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                    <Form.Select className="mt-4" value={description} onChange={(e) => setDescription(e.target.value)} aria-label="Default select example">
                        <option>Select an appointment</option>
                        <option value="Doctor Colsultation">Doctor Colsultation</option>
                        <option value="Collect Medicine">Collect Medicine Dispense</option>
                        <option value="Blood Test">Blood Test</option>
                        <option value="X-Ray">X-Ray</option>
                    </Form.Select>
                    <Form.Label className="mt-4">Select a date</Form.Label>
                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <Form.Label className="mt-4">Select a time</Form.Label>
                    <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="rounded-pill" onClick={handleClick}>Book</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}