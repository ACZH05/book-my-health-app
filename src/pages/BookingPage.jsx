import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../components/AuthProvider";
import BookingCard from "../components/BookingCard";
import { fetchBooking } from "../features/bookings/bookingSlice";
import { useNavigate } from "react-router-dom";
import BookingModal from "../components/BookingModal";

export default function BookingPage() {
  const [show, setShow] = useState(false)
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const bookings = useSelector((state) => state.booking.booking)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    if(!currentUser) return navigate('/login')
    const uid = currentUser.uid
    dispatch(fetchBooking(uid))
}, [currentUser, navigate, dispatch])

  return (
    <Container>
      <BookingModal show={show} handleClose={handleClose} />
      <h1 className="mt-5 fw-bold" style={{ color: "#FF7F50"}}>Booking Schedules</h1>
      {bookings.map((booking, index) => (
        <BookingCard key={booking.id || index} title={booking.title} description={booking.description} date={booking.date} time={booking.time}  />
      ))}
      <Button className="position-absolute sticky-bottom end-0 m-5 px-4 border-0" style={{ backgroundColor: "#FF7F50"}} onClick={handleShow}><i className="bi bi-calendar me-2" />Book Here!</Button>
      <BookingModal show={show} handleClose={handleClose} />
    </Container>
  )
}
