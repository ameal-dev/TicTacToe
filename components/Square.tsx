import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import {
	selectGameState,
	selectWinningRow,
	selectIsGameOver,
	selectTileIsValid, selectTile, selectIsWinningTile
} from "../store/gameSlice/gameSelectors";
import {thunkHandleUserMarkSquare} from "../store/gameSlice/gameThunks";

const Square: React.FC<{ square: number }> = ({ square }) => {
	const dispatch = useDispatch();

	const isGameOver = useSelector(selectWinningRow);
	const playerMark = useSelector((state: RootState) => selectTile(state, square));
	const isValid = useSelector((state: RootState) => selectTileIsValid(state, square));
	const isSquareBouncy = useSelector((state: RootState) => selectIsWinningTile(state, square));

	const handleUserMarkSquare = () => {
		if (!isGameOver && isValid) {
			// @ts-ignore
			dispatch(thunkHandleUserMarkSquare(square));
		}
	};

	return (
		<div
			className={`border h-full w-1/3 text-white flex justify-center items-center text-6xl cursor-pointer `}
			onClick={handleUserMarkSquare}
		>
			<p className={`${isSquareBouncy && "animate-bounce text-red-400"}`}>
				{playerMark}
			</p>
		</div>
	);
};

export default Square;
