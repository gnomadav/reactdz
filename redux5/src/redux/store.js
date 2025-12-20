import { configureStore } from "@reduxjs/toolkit";
import red1 from "./red1";

const store = configureStore({
    reducer: {
        clients: red1,
    },
});

export default store;
