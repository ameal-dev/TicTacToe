import type { NextPage } from "next";
import Board from "../components/Board";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import ScoreBar from "../components/ScoreBar";

const Home: NextPage = () => {
	const state = useSelector((state: RootState) => state.game.board);
	console.log(state);
	return (
		<div className='bg-black h-screen w-screen flex flex-col '>
			<ScoreBar />
			<Board />
		</div>
	);
};

export default Home;
