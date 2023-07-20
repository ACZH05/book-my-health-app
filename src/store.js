import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/bookings/bookingSlice";

export default configureStore({
    reducer: {
        booking: bookingReducer
    }
})