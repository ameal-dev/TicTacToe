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
					className='px-6 py-2 border border-white rounded-xl bg-black text-white text-xl font-bold w-48 mt-[140px] absolute animate-in fade-in zoom-in duration-400'
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
