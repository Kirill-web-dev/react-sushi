import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: "",
    sort: {
        title: "Популярности",
        sortProperty: "rating",
    },
};

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setSort(state, action) {
            state.sort = action.payload;
        },

        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
});

export const { setSort, setSearchValue } = sortSlice.actions;

export default sortSlice.reducer;
