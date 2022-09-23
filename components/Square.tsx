import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameState } from "../store/gameSlice";

const Square: React.FC<{ square: number }> = ({ square }) => {
	const dispatch = useDispatch();
	const firstPlayersTurn = useSelector(
		(state: GameState) => state.firstPlayersTurn
	);

	return (
		<div className='border h-full w-1/3 text-white flex justify-center items-center text-6xl cursor-pointer'>
			{square}
		</div>
	);
};

export default Square;
