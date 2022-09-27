import type { NextPage } from "next";
import Board from "../components/Board";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import ScoreBar from "../components/ScoreBar";
import { resetBoard } from "../store/gameSlice";

const Home: NextPage = () => {
	const isGameOver = useSelector((state: RootState) => state.game.isGameOver);
	const dispatch = useDispatch();

	const handleClickNewGame = () => {
		dispatch(resetBoard());
	};
	return (
		<div className='bg-black h-screen w-screen flex flex-col items-center relative'>
			<ScoreBar />
			{isGameOver && (
				<button
					className='px-4 py-2 border-4 border-white rounded-xl bg-black text-white text-xl font-bold w-40 mt-[140px] absolute animate-wiggle ease-in'
					onClick={handleClickNewGame}
				>
					NEW GAME
				</button>
			)}
			<Board />
		</div>
	);
};

export default Home;
