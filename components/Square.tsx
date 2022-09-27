import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { markSquare } from "../store/gameSlice";

const Square: React.FC<{ square: number; row: number }> = ({ square }) => {
	const dispatch = useDispatch();

	const playerMark = useSelector(
		(state: RootState) => state.game.board[square]
	);
	const gameOver = useSelector((state: RootState) => state.game.gameOver);
	const winningSquares = useSelector((state: RootState) => state.game.winIdx);

	const handleUserClick = () => {
		if (!gameOver) {
			dispatch(markSquare({ square }));
		}
	};

	const isSquareBouncy = winningSquares?.includes(square);

	return (
		<div
			className={`border h-full w-1/3 text-white flex justify-center items-center text-6xl cursor-pointer `}
			onClick={handleUserClick}
		>
			<p className={`${isSquareBouncy && "animate-bounce text-red-400"}`}>
				{playerMark}
			</p>
		</div>
	);
};

export default Square;
