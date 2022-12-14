import type { NextPage } from "next";
import Board from "../components/Board";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import ScoreBar from "../components/ScoreBar";
import NewGameButton from "../components/NewGameButton";

const Home: NextPage = () => {
	const isGameOver = useSelector((state: RootState) => state.game.isGameOver);

	return (
		<div className='bg-black h-screen w-screen flex flex-col items-center relative'>
			<ScoreBar />
			{isGameOver && <NewGameButton />}
			<Board />
		</div>
	);
};

export default Home;
