import { createSlice } from "@reduxjs/toolkit";
import {selectWinningRow, selectIsGameOver, selectBoard} from "./gameSelectors";
import {GAME} from "../../constans";

interface GameState {
	board: string[];
	round: number;
	playersPoints: [number, number];
	isGameOver: boolean;
	firstPlayer: boolean;
}

const initalGameState: GameState = {
	board: new Array(9).fill(""),
	isGameOver: false,
	round: 0,
	playersPoints: [0, 0],
	firstPlayer: true,
};

const gameSlice = createSlice({
	name: GAME,
	initialState: initalGameState,
	reducers: {
		actionSwitchPlayer(state){
			state.firstPlayer = !state.firstPlayer;
		},
		actionAdvanceRound(state) {
			state.round = state.round + 1;
		},
		actionMarkSquare(state, { payload: { square, playerSymbol }}) {
			state.board[square] = playerSymbol;
		},
		actionResetBoard(state) {
			state.board.fill("");
		},
		actionSetPlayerPoints(state, { payload: { playersPoints }}) {
			state.playersPoints = playersPoints;
		}
	},
});

export const gameSliceReducer = gameSlice.reducer;
export const {
	actionMarkSquare,
	actionResetBoard,
	actionAdvanceRound,
	actionSwitchPlayer,
	actionSetPlayerPoints
} = gameSlice.actions;
