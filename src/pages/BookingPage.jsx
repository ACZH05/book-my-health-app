import { useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../components/AuthProvider";
import BookingCard from "../components/BookingCard";
import { fetchBooking } from "../features/bookings/bookingSlice";

export default function BookingPage() {
  const { currentUser } = useContext(AuthContext) 

  const dispatch = useDispatch()
  const bookings = useSelector((state) => state.booking.booking)
  
  useEffect(() => {
    const uid = currentUser.uid
    dispatch(fetchBooking(uid))
  }, [dispatch, currentUser])

  console.log(bookings)

  return (
    <Container>
      <h1 className="mt-5 fw-bold" style={{ color: "#FF7F50"}}>Booking Schedules</h1>
      {bookings.map(booking => (
        <BookingCard key={booking.id} title={booking.title} description={booking.description} date={booking.date} time={booking.time}  />
      ))}
      <Button className="position-absolute sticky-bottom end-0 m-5 px-4 border-0" style={{ backgroundColor: "#FF7F50"}}><i className="bi bi-calendar me-2" />Book Here!</Button>
    </Container>
  )
}
