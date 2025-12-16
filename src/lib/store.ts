import { configureStore } from "@reduxjs/toolkit";

// Create a simple slice to ensure valid reducer structure
// We can expand this later for actual global state
const uiSlice = (state = { loaded: true }, action: any) => state;

export const store = configureStore({
    reducer: {
        ui: uiSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
