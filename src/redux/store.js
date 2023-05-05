import { configureStore } from "@reduxjs/toolkit";
import rollsSlice from "./slices/rollsSlice";
import sortSlice from "./slices/sortSlice";

export const store = configureStore({
    reducer: {
        rollsSlice,
        sortSlice,
    },
});
