import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import {selectIsFirstPlayersTurn, selectIsGameOver, selectPlayerPoints} from "../store/gameSlice/gameSelectors";

const ScoreBar = () => {
	const playerOneScore = useSelector((state: RootState) => selectPlayerPoints(state, 0));
	const playerTwoScore = useSelector((state: RootState) => selectPlayerPoints(state, 1));
	const firstPlayerTurn = useSelector((state: RootState) => selectIsFirstPlayersTurn(state));
	const isGameOver = useSelector((state: RootState) => selectIsGameOver(state));

	return (
		<div className='w-screen h-28 border-white border bg-black flex'>
			<div className='flex-1 bg-black text-white border border-white flex justify-center items-center flex-col gap-1'>
				<h1 className='text-xl'>Player 1</h1>
				<h1 className='text-5xl'>{playerOneScore}</h1>
			</div>
			<div className='flex-1 bg-black text-white border border-white flex justify-center items-center flex-col gap-2 tracking-wide'>
				<p className='text-2xl'>PLAYER TURN:</p>
				<h1
					className={`text-3xl font-bold tracking-wider ${
						isGameOver && "animate-bounce text-red-400"
					}`}
				>
					{!isGameOver
						? firstPlayerTurn
							? "PLAYER 1"
							: "PLAYER 2"
						: "GAME OVER"}
				</h1>
			</div>
			<div className='flex-1 bg-black text-white border border-white flex justify-center items-center flex-col gap-1'>
				<h1 className='text-xl'>Player 2</h1>
				<h1 className='text-5xl'>{playerTwoScore}</h1>
			</div>
		</div>
	);
};
export default ScoreBar;
