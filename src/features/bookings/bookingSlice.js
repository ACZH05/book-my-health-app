import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

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

export const deleteBooking = createAsyncThunk(
    "booking/deleteBooking",
    async (obj) => {
        const res = await axios.delete(`${BASE_URL}/booking/user/${obj.user_id}/delete/${obj.id}`)
        return res.json()
    }
)

export const updateBooking = createAsyncThunk(
    "booking/updateBooking",
    async (obj) => {
        const data = {
            title: obj.newTitle,
            description: obj.newDescription,
            date: obj.newDate,
            time: obj.newTime
        }
        const res = await axios.put(`${BASE_URL}/booking/${obj.id}`, data)
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
        }),
        builder.addCase(deleteBooking.fulfilled, (state, action) => {
            state.booking = action.payload
        }),
        builder.addCase(updateBooking.fulfilled, (state, action) => {
            state.booking = action.payload
        })
    }
})

export default postSlice.reducer