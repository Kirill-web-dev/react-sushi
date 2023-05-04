import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSushies = createAsyncThunk("sushi/fetchSushiStatus", async () => {
    const response = await axios.get(`http://localhost:3001/rolls?`);
    return response.data;
});

const initialState = {
    sushiItems: [],
    status: "loading",
};

const sushiSlice = createSlice({
    name: "sushi",
    initialState,
    reducers: {
        setSushies(state, action) {
            state.sushiItems = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchSushies.pending, (state) => {
            state.status = "loading";
            state.sushiItems = [];
        });
        builder.addCase(fetchSushies.fulfilled, (state, action) => {
            state.sushiItems = action.payload;
            state.status = "success";
        });
        builder.addCase(fetchSushies.rejected, (state) => {
            state.status = "error";
            state.sushiItems = [];
        });
    },
});

export const { setSushies } = sushiSlice.actions;

export default sushiSlice.reducer;
