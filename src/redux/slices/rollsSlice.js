import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRolls = createAsyncThunk("rolls/fetchSushiStatus", async (params) => {
    const { sortBy, order, currentPage, searchBy } = params;
    const response = await axios.get(`http://localhost:3001/rolls?q=${searchBy}&_page=${currentPage}&_limit=8&_sort=${sortBy}&_order=${order}`);
    return response.data;
});

const initialState = {
    rollsItems: [],
    status: "loading",
    currentPage: 1,
};

const rollsSlice = createSlice({
    name: "rolls",
    initialState,
    reducers: {
        setRolls(state, action) {
            state.sushiItems = action.payload;
        },

        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchRolls.pending, (state) => {
            state.status = "loading";
            state.rollsItems = [];
        });
        builder.addCase(fetchRolls.fulfilled, (state, action) => {
            state.rollsItems = action.payload;
            state.status = "success";
        });
        builder.addCase(fetchRolls.rejected, (state) => {
            state.status = "error";
            state.rollsItems = [];
        });
    },
});

export const { setRolls, setCurrentPage } = rollsSlice.actions;

export default rollsSlice.reducer;
