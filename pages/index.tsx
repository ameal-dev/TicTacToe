import type { NextPage } from "next";
import Board from "../components/Board";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import ScoreBar from "../components/ScoreBar";

const Home: NextPage = () => {
	return (
		<div className='bg-black h-screen w-screen flex flex-col '>
			<ScoreBar />
			<Board />
		</div>
	);
};

export default Home;
