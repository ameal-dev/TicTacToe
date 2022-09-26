import { createSlice } from "@reduxjs/toolkit";

export interface GameState {
	board: string[];
	gameOver: boolean;
	firstPlayer: boolean;
	firstPlayerPoints: number;
	secondPlayerPoints: number;
}

const initalGameState = {
	board: new Array(9).fill(""),
	gameOver: false,
	firstPlayer: true,
	firstPlayerPoints: 0,
	secondPlayerPoints: 0,
} as GameState;

const isGameOver = (board: string[]) => {
	let gameOver = false;
	const firstRow = board[0] + board[1] + board[2];
	const secondRow = board[3] + board[4] + board[5];
	const thirdRow = board[6] + board[7] + board[8];
	const firstCol = board[0] + board[3] + board[6];
	const secondCol = board[1] + board[4] + board[7];
	const thirdCol = board[2] + board[5] + board[8];
	const topLeftBottomRight = board[0] + board[4] + board[8];
	const topRightBottomLeft = board[2] + board[4] + board[6];

	if (
		firstRow === "XXX" ||
		secondRow === "XXX" ||
		thirdRow === "XXX" ||
		firstCol === "XXX" ||
		secondCol === "XXX" ||
		thirdCol === "XXX" ||
		topLeftBottomRight === "XXX" ||
		topRightBottomLeft === "XXX"
	) {
		gameOver = true;
	}
	if (
		firstRow === "OOO" ||
		secondRow === "OOO" ||
		thirdRow === "OOO" ||
		firstCol === "OOO" ||
		secondCol === "OOO" ||
		thirdCol === "OOO" ||
		topLeftBottomRight === "OOO" ||
		topRightBottomLeft === "OOO"
	) {
		gameOver = true;
	}
	return gameOver;
};

const gameSlice = createSlice({
	name: "game",
	initialState: initalGameState,
	reducers: {
		markSquare(state, action) {
			const square = action.payload.square;
			const playerTurn = state.firstPlayer;
			const validSquare = state.board[square] === "";
			if (validSquare) {
				//update state/board based on player marking the square
				if (playerTurn) {
					state.board[square] = "O";
				} else {
					state.board[square] = "X";
				}
				//announce game over if a player wins as a result
				if (isGameOver(state.board)) {
					state.gameOver = true;
					playerTurn ? state.firstPlayerPoints++ : state.secondPlayerPoints++;
					console.log(
						`Game Over! ${playerTurn ? "First Player" : "Second Player"} Wins!`
					);
				} else {
					//otherwise change playerTurn
					state.firstPlayer = !playerTurn;
				}
			}
		},
		resetBoard(state) {
			state.board.fill("");
		},
	},
});

export const gameSliceReducer = gameSlice.reducer;
export const { markSquare } = gameSlice.actions;
