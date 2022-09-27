import { createSlice } from "@reduxjs/toolkit";

interface GameState {
	board: string[];
	gameOver: boolean;
	firstPlayer: boolean;
	firstPlayerPoints: number;
	secondPlayerPoints: number;
	winIdx: number[] | undefined;
}

const initalGameState = {
	board: new Array(9).fill(""),
	gameOver: false,
	firstPlayer: true,
	firstPlayerPoints: 0,
	secondPlayerPoints: 0,
	winIdx: undefined,
} as GameState;

const isGameOver = (board: string[]) => {
	let gameOver = false;
	//! Win conditions
	const firstRow = board[0] + board[1] + board[2];
	const secondRow = board[3] + board[4] + board[5];
	const thirdRow = board[6] + board[7] + board[8];
	const firstCol = board[0] + board[3] + board[6];
	const secondCol = board[1] + board[4] + board[7];
	const thirdCol = board[2] + board[5] + board[8];
	const topLeftBottomRight = board[0] + board[4] + board[8];
	const topRightBottomLeft = board[2] + board[4] + board[6];

	const winConArry = [];
	winConArry.push(
		firstRow,
		secondRow,
		thirdRow,
		firstCol,
		secondCol,
		thirdCol,
		topLeftBottomRight,
		topRightBottomLeft
	);

	const winConversion = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	let winningSquares;
	winConArry.forEach((row, idx) => {
		if (row === "XXX" || row === "OOO") {
			gameOver = true;
			winningSquares = winConversion[idx];
			console.log(winConversion[idx]);
		}
	});

	return { gameOver, winningSquares };
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
				//!update state/board based on player marking the square
				if (playerTurn) {
					state.board[square] = "O";
				} else {
					state.board[square] = "X";
				}
				//!announce game over if a player wins as a result
				if (isGameOver(state.board).gameOver) {
					state.gameOver = true;
					state.winIdx = isGameOver(state.board).winningSquares;
					console.log(state.winIdx);
					playerTurn ? state.firstPlayerPoints++ : state.secondPlayerPoints++;
					console.log(
						`Game Over! ${playerTurn ? "First Player" : "Second Player"} Wins!`
					);
				} else {
					//!otherwise change playerTurn
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
