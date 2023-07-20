import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'https://booking-system-api-alfred-chinchin.sigma-school-full-stack.repl.co'

export const fetchBooking = createAsyncThunk(
    "booking/fetchBooking",
    async (userId) => {
        const res = await fetch(`${BASE_URL}/booking/user/${userId}`)
        return res.json()
    }
)

const postSlice = createSlice({
    name: "booking",
    initialState: { booking: []},
    reducers: [],
    extraReducers: (builder) => {
        builder.addCase(fetchBooking.fulfilled, (state, action) => {
            state.booking = action.payload
        })
    }
})

export default postSlice.reducer