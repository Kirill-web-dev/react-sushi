import { configureStore } from "@reduxjs/toolkit";
import sushiSlice from "./slices/sushiSlice";

export const store = configureStore({
    reducer: {
        sushiSlice,
    },
});
