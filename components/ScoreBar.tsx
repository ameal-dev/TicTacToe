import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const ScoreBar = () => {
	const playerOneScore = useSelector(
		(state: RootState) => state.game.firstPlayerPoints
	);
	const playerTwoScore = useSelector(
		(state: RootState) => state.game.secondPlayerPoints
	);
	const firstPlayerTurn = useSelector(
		(state: RootState) => state.game.firstPlayer
	);

	const isGameOver = useSelector((state: RootState) => state.game.gameOver);

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
						isGameOver && "animate-bounce    "
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
