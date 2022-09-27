export const isGameOver = (board: string[]) => {
	let isGameOver = false;
	//! Win conditions
	const firstRow = board[0] + board[1] + board[2];
	const secondRow = board[3] + board[4] + board[5];
	const thirdRow = board[6] + board[7] + board[8];
	const firstCol = board[0] + board[3] + board[6];
	const secondCol = board[1] + board[4] + board[7];
	const thirdCol = board[2] + board[5] + board[8];
	const topLeftBottomRight = board[0] + board[4] + board[8];
	const topRightBottomLeft = board[2] + board[4] + board[6];

	const winConditionArry = [];
	winConditionArry.push(
		firstRow,
		secondRow,
		thirdRow,
		firstCol,
		secondCol,
		thirdCol,
		topLeftBottomRight,
		topRightBottomLeft
	);
	//! winningSquares sub-arrays match the index of winCondtionArry
	const winningSquaresArry = [
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
	winConditionArry.forEach((row, idx) => {
		if (row === "XXX" || row === "OOO") {
			isGameOver = true;
			winningSquares = winningSquaresArry[idx];
		}
	});

	return { isGameOver, winningSquares };
};
