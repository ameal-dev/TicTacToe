import { configureStore } from "@reduxjs/toolkit";
import { uiSliceReducer } from "./uiSlice";
import { gameSliceReducer } from "./gameSlice";

export const store = configureStore({
	reducer: {
		game: gameSliceReducer,
		ui: uiSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
