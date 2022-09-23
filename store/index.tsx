import { configureStore } from "@reduxjs/toolkit";
import { uiSliceReducer } from "./uiSlice";
import { gameSliceReducer } from "./gameSlice";

export const store = configureStore({
	reducer: {
		game: gameSliceReducer,
		ui: uiSliceReducer,
	},
});
