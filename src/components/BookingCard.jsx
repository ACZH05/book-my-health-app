import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { deleteBooking } from "../features/bookings/bookingSlice";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function BookingCard({ title, description, date, time, email, phoneNumber, bookingId }) {
    const dispatch = useDispatch()
    const { currentUser } = useContext(AuthContext)
    
    const handleDelete = (e) => {
        console.log(e.target.value)
        const obj = {user_id: currentUser.uid, id: e.target.value}
        console.log(obj)
        dispatch(deleteBooking(obj))
    }
    
    function formatDate(inputDate) {
        const options = { day: "2-digit", month: "long", year: "numeric" };
        const date = new Date(inputDate);
        return date.toLocaleString("en-GB", options);
    }

    function formatTime(inputTime) {
        const options = { hour: "numeric", minute: "numeric" };
        const date = new Date(`2000-01-01T${inputTime}`);
        const formattedTime = date.toLocaleString("en-US", options);
        return formattedTime;
    }
      
    return (
    <Card className="mt-4" style={{ width: "18rem", backgroundColor: "#FEFEFE", border: "1.5px solid #FF7F50"}}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{formatDate(date)}</Card.Text>
            <Card.Text>{formatTime(time)}</Card.Text>
            <Card.Text>{email}</Card.Text>
            <Card.Text>{phoneNumber}</Card.Text>
            <Button className="me-3 border-0" style={{ backgroundColor: "#FF7F50"}} value={bookingId}><i className="bi bi-pencil-square"></i></Button>
            <Button variant="danger" value={bookingId} onClick={handleDelete}><i className="bi bi-trash3"></i></Button>
        </Card.Body>
    </Card>
    )
}
