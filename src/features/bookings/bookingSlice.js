import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://booking-system-api-alfred-chinchin.sigma-school-full-stack.repl.co'

export const fetchBooking = createAsyncThunk(
    "booking/fetchBooking",
    async (userId) => {
        const res = await fetch(`${BASE_URL}/booking/user/${userId}`)
        return res.json()
    }
)
export const saveBooking = createAsyncThunk(
    "booking/saveBooking",
    async (obj) => {
        const data = {
            title: obj.title,
            description: obj.description,
            date: obj.date,
            time: obj.time,
            user_id: obj.userId
        }

        const res = await axios.post(`${BASE_URL}/booking`, data)
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
        }),
        builder.addCase(saveBooking.fulfilled, (state, action) => {
            state.booking = [action.payload, ...state.name]
        })
    }
})

export default postSlice.reducer