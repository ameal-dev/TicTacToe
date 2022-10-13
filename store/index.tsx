import { configureStore } from "@reduxjs/toolkit";
import { uiSliceReducer } from "./uiSlice/uiSlice";
import { gameSliceReducer } from "./gameSlice/gameSlice";

export const store = configureStore({
	reducer: {
		game: gameSliceReducer,
		ui: uiSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
